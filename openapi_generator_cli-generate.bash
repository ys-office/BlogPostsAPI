#! /bin/bash

func_exception_generator () {

    echo "GENERATOR is NULL"

    exit 1

}

func_exception_yaml () {

    echo "YAML_FILE is NULL"

    exit 1

}

GENERATOR="${1}"
YAML_FILE="${2}"

[ -n "${GENERATOR}" ] || func_exception_generator
[ -n "${YAML_FILE}" ] || func_exception_yaml

docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/${YAML_FILE} -g ${GENERATOR} -o /local/out/${GENERATOR}

exit ${?}
