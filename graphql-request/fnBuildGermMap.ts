import fetch from "cross-fetch";
import { GraphQLClient } from "graphql-request";
import {
    GetIntentionListDocument,
    GetIntentionListQuery,
    GetIntentionListQueryVariables, ModuleType
} from "../operations";

import { pipe } from "fp-ts/function";
import {fnBuildGermMap} from "./functionalModules/buildGermMap";

const client = new GraphQLClient("http://localhost:8080/graphql", { fetch });

client
    .request<GetIntentionListQuery, GetIntentionListQueryVariables>(GetIntentionListDocument, {})
    .then(( data ) =>
    {
        console.log("...queryCropIntentionsList");
        console.log(data.queryCropIntentionsList);

        console.log(data.queryModuleMap);
        console.log("...queryModuleMap");

        const add5 = (x: number) => x + 5;
        const multiply2 = (x: number) => x * 2;

        const one = multiply2(add5(3)); // Ok
        const two = pipe(3, add5, multiply2); // Better

        console.log(one, two); // 16, 16


        fnBuildGermMap(data);

        // ok so we have desired crop harvests per week and module map.
        //
        // input: cropIntentionsList
        // output: idxs of germ sites to signal



    });