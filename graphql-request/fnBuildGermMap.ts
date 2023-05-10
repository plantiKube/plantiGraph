import fetch from "cross-fetch";
import { GraphQLClient } from "graphql-request";
import {
    GetIntentionListDocument,
    GetIntentionListQuery,
    GetIntentionListQueryVariables
} from "../operations";



const client = new GraphQLClient("http://localhost:8080/graphql", { fetch });


client
    .request<GetIntentionListQuery, GetIntentionListQueryVariables>(GetIntentionListDocument, {})
    .then(( data ) =>
    {
        console.log("GetIntentionListDocument");
        console.log(data.queryCropIntentionsList);
    });