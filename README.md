# `plantiGraph`

`plantiGraph` hosts all `plantiKube` state.

## General tutorial.. learn you a `plantiGraph` for great good!

First order of biz.. connect to a GraphQL endpoint.

In my regular development flow I instantiate my own, as defined by the `docker-compose.yml` in this here handy dandy repo..

### instantiate a graph locally via docker

```bash
docker compose up
```

Your endpoint is live at `http://127.0.0.1:8080/graphql`

Vunderfal.


There are a couple of housekeeping commands I execute regularly in my day to day flow.

### schema and state management

Sometimes I want to nuke all data...

```bash
curl -X POST localhost:8080/alter -d '{"drop_all": true}'
```

.. and then reinstall the schema...

```bash
curl -X POST localhost:8080/admin/schema --data-binary '@schema.graphql'
```

Great your schema is live once again.


### codegen

We regularly `yarn run codegen` to regenerate TypeScript types ==> `operations.ts`

This requires pulling the schema down from our live endpoint ==> `generatedSchema.graphql`

```bash
./utilities/scripts/getToDaSchema.sh
```


