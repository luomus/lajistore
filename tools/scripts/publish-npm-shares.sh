#!/bin/bash
set -e

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

cd ${SCRIPT_PATH}/../../libs/shared/models

WHO=$(npm whoami)

if [[ $WHO = "luomus" ]]; then
  npm publish
else
  echo "NPM not logged in as LUOMUS"
fi
