#!/bin/bash
set -e

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
DATA_FILES=./tools/init/*.json

cd ${SCRIPT_PATH}/../../

echo "${SYSTEM_PASSWORD}"

if [[ -z "${SYSTEM_ID}" || -z "${SYSTEM_PASSWORD}" ]]; then
  echo "Both SYSTEM_ID and SYSTEM_PASSWORD are missing"
else
  #echo "Adding system ${SYSTEM_ID}"
  npm run store:cli user ${SYSTEM_ID} ${SYSTEM_PASSWORD}

  for FILENAME in ${DATA_FILES}; do
      [ -e "${FILENAME}" ] || continue
      TYPE=$(basename $FILENAME .json)

      echo ""
      echo ""
      echo "Importing ${TYPE}..."

      #echo "WRITE RESULTS"
      #time curl -u "${SYSTEM_ID}:${SYSTEM_PASSWORD}" -X POST "${INTERNAL_ADDRESS}/${TYPE}" -d "@${FILENAME}" -H "Content-type: application/json" -o results.json

      echo "PUBLIC"
      time curl -u "${SYSTEM_ID}:${SYSTEM_PASSWORD}" -X POST "${PUBLIC_ADDRESS}/${TYPE}" -d "@${FILENAME}" -H "Content-type: application/json" -o /dev/null

      #sleep 30
      #echo "PRIVATE"
      #time curl -u "${SYSTEM_ID}:${SYSTEM_PASSWORD}" -X POST "${INTERNAL_ADDRESS}/${TYPE}" -d "@${FILENAME}" -H "Content-type: application/json" -o /dev/null
      #time curl -u "${SYSTEM_ID}:${SYSTEM_PASSWORD}" -X POST "${INTERNAL_ADDRESS}/${TYPE}" -d "@${FILENAME}" -H "Content-type: application/json" -i

  done
fi

echo ""
echo ""
echo "********************************"
echo "*                              *"
echo "*            DONE              *"
echo "*                              *"
echo "********************************"
echo ""


