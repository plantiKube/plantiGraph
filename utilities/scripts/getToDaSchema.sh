#!/bin/bash

echo -en \
$( \
  curl 'http://127.0.0.1:8080/admin' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connection: keep-alive' \
  -H 'DNT: 1' \
  -H 'Origin: file://' \
  --data-binary '{"query":"{\n  getGQLSchema {\n    generatedSchema\n  }\n}"}' \
  --compressed \
  | jq .data.getGQLSchema.generatedSchema \
  | sed -e 's/^"//' -e 's/"$//' \
) \
| sed 's/\\\"/\"/g' \
| tee generatedSchema.graphql