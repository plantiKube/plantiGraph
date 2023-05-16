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


## Composing GraphQL queries and mutations

`GraphQL Playground` is a great tool for quickly drafting queries, and getting responses from our endpoint.

Inside of the `gql` folder is a variety of `*.graphql` files that contain queries and mutations that we use in our day to day flow.
the `*.variables.json` files correspond to the variables that we pass to the queries and mutations.

The contents of each of these can be copied verbatim into `GraphQL Playground` and executed against our endpoint.
(variables json goes in the "Query Variables" tab at the bottom) 


## Executing queries and mutations programatically.

We use `graphql-request` to execute queries and mutations within `TypeScript` context.

Try running the function exported by `instantiateNursery.ts` via:

```bash
jest graphql-request/initScripts/instantiateNursery.test.ts 
```

# FP (Functional Programming)

We always bias towards functional programming paradigm (and away from imperative approach) because we are fond of maintainable code and sanity.

In our current `plantiGraph` context we use `fp-ts` although the same would apply if we were speaking `Haskell`

.. concretely this means composing *pure functions* via `pipe` and `flow` and avoiding side effects (such that functions are atomically testable).
[This blog post is a decent breakdown of this abstraction.](https://rlee.dev/practical-guide-to-fp-ts-part-1)

Abstractly every transformation of our datagraph follows the following flow:

1. query the graph for the input data object
2. pipe input data object through a series of transformations via `pipe` or `flow`
3. mutate the graph with the transformed data object


---

---
`plantiKube` ecosystem projects such as `plantiGraph` are
</> and maintained with <3 by GreenCubes.io
This code is copyleft via AGPL Licensing
in service of self sovereign food security for all.
