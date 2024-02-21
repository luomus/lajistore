#!/bin/bash
set -e

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

cd ${SCRIPT_PATH}/../../libs/shared/schemas

npm ci
npm version patch
npm publish
rm -rf node_modules
