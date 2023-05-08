
async function exampleLambda({args, dql}) {
    console.log(args)
    return "an example on query"
}

async function ingestQR({args}) {
    console.log(args)
    return "TODO: parse qr and activate"
}

async function aggregateNumSites({args}){
    numSites = 27
    console.log("number of sites: ", numSites)
    return numSites
}


self.addGraphQLResolvers({
    "Query.exampleLambda": exampleLambda,
    "Mutation.ingestQR": ingestQR,
    "Module.totalNumberOfSites": aggregateNumSites
})
