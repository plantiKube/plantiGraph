
async function exampleLambda({args, dql}) {
    console.log(args)
    return "an example on query"
}

async function ingestQR({args}) {
    console.log(args)
    return "TODO: parse qr and activate"
}

self.addGraphQLResolvers({
    "Query.exampleLambda": exampleLambda,
    "Mutation.ingestQR": ingestQR
})
