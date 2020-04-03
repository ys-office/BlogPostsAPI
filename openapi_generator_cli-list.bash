#! /bin/bash

docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli list

exit ${?}
