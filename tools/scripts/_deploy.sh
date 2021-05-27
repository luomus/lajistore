#!/bin/bash
set -e -a

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
OC_USER="$( oc whoami )"
OC_SERVER="$( oc whoami --show-server )"
OC_PROJECT=lajistore-api
REGISTRY=${1}
TARGET_SERVER_MATCH=${2}
TYPE=${3}

cd ${SCRIPT_PATH}/../../

if [[ -z "${OC_USER}" ]]; then
  echo ""
  echo "Please login with oc command first!!!"
  echo ""
  echo "PLZ note that you also need to install docker and oc commands"
  echo ""
  exit 1
fi
if [[ $OC_SERVER != *"${TARGET_SERVER_MATCH}"* ]]; then
  echo ""
  echo "You should login to ${TARGET_SERVER_MATCH} Kontti instead of"
  echo "${OC_SERVER} "
  echo ""
  exit 1
fi
if [[ ! -f ".env.${TYPE}" ]]; then
  echo ""
  echo "You need the file '.env.${TYPE}' in the repo root"
  echo "in order to deploy ${TYPE}."
  echo ""
  exit 1
fi
if [[ ! -f "tools/kubernetes/store-secret.${TYPE}.yaml" ]]; then
  echo ""
  echo "You need the file 'tools/kubernetes/store-secret.${TYPE}.yaml'"
  echo "in order to deploy ${TYPE}."
  echo ""
  exit 1
fi
if [[ ! -f "tools/kubernetes/store-configmap.${TYPE}.yaml" ]]; then
  echo ""
  echo "You need the file 'tools/kubernetes/store-configmap.${TYPE}.yaml'"
  echo "in order to deploy ${TYPE}."
  echo ""
  exit 1
fi


source ".env.${TYPE}"

oc project ${OC_PROJECT}

echo "Prepare configs..."
# These two are using local configs that can differ from the global
docker-compose -f "docker-compose.${TYPE}.yml" run --rm store npm run store:cli generate open-api
docker-compose -f "docker-compose.${TYPE}.yml" run --rm store npm run store:cli generate graphql

echo "Building..."
docker build -t store-api -f tools/docker/store/Dockerfile --target api --build-arg STORE_VERSION=api .
docker build -t store-cli -f tools/docker/store/Dockerfile --target cli --build-arg STORE_VERSION=cli .
docker build -t store-worker -f tools/docker/store/Dockerfile --target worker --build-arg STORE_VERSION=worker .

echo "Tagging..."
docker tag store-api "${REGISTRY}/store-api:latest"
docker tag store-cli "${REGISTRY}/store-cli:latest"
docker tag store-worker "${REGISTRY}/store-worker:latest"

echo "Pushing..."
docker login -u `oc whoami` -p `oc whoami --show-token` ${REGISTRY}
docker push "${REGISTRY}/store-api"
docker push "${REGISTRY}/store-cli"
docker push "${REGISTRY}/store-worker"

echo "Apply changes"
oc apply -f "tools/kubernetes/store-configmap.${TYPE}.yaml"
oc apply -f "tools/kubernetes/store-secret.${TYPE}.yaml"
oc apply -f tools/kubernetes/store-api-statefulset.yaml
oc apply -f tools/kubernetes/store-cli-statefulset.yaml
oc apply -f tools/kubernetes/store-worker-statefulset.yaml

echo "Restarting pods"
PODS="$( oc get pods | grep store- | awk '{print $1}' )"
for pod in $PODS
do
  oc delete pod $pod
done

echo ""
echo ""
echo "Update elasticsearch indexes"
echo ""
echo "plz note that if the index has changed enough for reindexing to happen"
echo "this step can take really long time!"
echo ""
echo "You can follow the progress with command:"
echo "oc exec es-master-0 curl localhost:9200/_cat/indices"
echo ""
oc exec -i -t store-cli-0 -- node main.js index-update

echo ""
echo ""
echo "********************************"
echo "*                              *"
echo "*          DEPLOYED            *"
echo "*                              *"
echo "********************************"
echo ""
