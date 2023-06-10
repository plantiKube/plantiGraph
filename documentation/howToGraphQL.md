## Rough outline of steps.

1. Add to `schema.graphql`
2. Push to schema ;; `curl -X POST localhost:8080/admin/schema --data-binary '@schema.graphql'`
3. Test out some query and mutations via GraphQL playground.
4. Copy over Gr~~aphQL queries//mutations into gql folder
   + These will be referenced by `codegen.yml`
   + .. specifically the line:
     + `documents: "gql/**/*.graphql"`~~
5. Regenerate `operations.ts`
    + `./utilities/refreshGraphQL.operations.ts.sh`
6. Utilize typescript endpoint.


