#!/bin/bash

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd ${SCRIPT_PATH}/../../

# Clean up in case the volumes were left hanging
docker volume rm luomus_elastic_data
docker volume rm luomus_postgre_data

docker-compose -f ./docker-compose.e2e.yml up test
#docker-compose -f ./docker-compose.e2e.yml up store-api
docker-compose -f ./docker-compose.e2e.yml down --remove-orphans

docker volume rm luomus_elastic_data
docker volume rm luomus_postgre_data
