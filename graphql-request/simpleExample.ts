import fetch from "cross-fetch";
import { GraphQLClient } from "graphql-request";
import {WheresChuckDocument, WheresChuckQuery, WheresChuckQueryVariables} from "../types";



const client = new GraphQLClient("http://localhost:8080/graphql", { fetch });


client
    .request<WheresChuckQuery, WheresChuckQueryVariables>(WheresChuckDocument, {})
    .then(( data ) =>{
        console.log(data.querySite);

        // ok now iterate through the sites
        data.querySite.forEach((site) => {
            console.log(site.id);
            site.occupant
        });
    });
