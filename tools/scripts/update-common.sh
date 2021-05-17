#!/bin/bash
set -e

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
COMPOSE_FILE="docker-compose.yml"
if [ -n "${1}" ]
  then COMPOSE_FILE="docker-compose.${1}.yml"
fi

echo ""
echo ""
echo "Using docker compose file ${COMPOSE_FILE}"

sleep 3

cd ${SCRIPT_PATH}/../../

# Generate all the common files
echo ""
echo ""
echo "Generating json-schema..."
docker-compose -f "${COMPOSE_FILE}" run --rm store npm run store:cli generate json-schema

echo ""
echo ""
echo "Generating OpenAPI spec..."
docker-compose -f "${COMPOSE_FILE}" run --rm store npm run store:cli generate open-api

echo ""
echo ""
echo "Generating Typescript interfaces..."
docker-compose -f "${COMPOSE_FILE}" run --rm store npm run store:cli generate interface

echo ""
echo ""
echo "Generating Json-LD context..."
docker-compose -f "${COMPOSE_FILE}" run --rm store npm run store:cli generate json-ld-context

echo ""
echo ""
echo "Generating Elasticsearch indexes..."
docker-compose -f "${COMPOSE_FILE}" run --rm store npm run store:cli generate es-index

echo ""
echo ""
echo "Generating GraphQL schema..."
docker-compose -f "${COMPOSE_FILE}" run --rm store npm run store:cli generate graphql

echo ""
echo ""
echo "Clear environment..."
docker-compose -f "${COMPOSE_FILE}" down --remove-orphans

echo ""
echo "********************************"
echo "*                              *"
echo "*          ALL DONE            *"
echo "*                              *"
echo "********************************"
echo ""
