#!/bin/bash
curl -X POST localhost:8080/alter -d '{"drop_all": true}'
curl -X POST localhost:8080/admin/schema --data-binary '@schema.graphql'
