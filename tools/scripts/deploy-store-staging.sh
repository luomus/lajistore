#!/bin/bash
set -e

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

cd ${SCRIPT_PATH}

./_deploy.sh \
  "registry.apps.ocp-test-0.k8s.it.helsinki.fi/lajistore-api" \
  "https://api.ocp-test-0.k8s.it.helsinki.fi:6443" \
  "staging" \
  ${1}


