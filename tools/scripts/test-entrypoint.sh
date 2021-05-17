#!/bin/bash
set -e

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
DATA_FILES=./tools/init/*.json

cd ${SCRIPT_PATH}/../../

npm run store:cli generate open-api
npm run store:cli user KE.006 password
npm run store:cli user KE.007 password

exec "$@"
