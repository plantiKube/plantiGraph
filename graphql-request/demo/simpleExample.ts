import fetch from "cross-fetch";
import { GraphQLClient } from "graphql-request";
import {WheresChuckDocument, WheresChuckQuery, WheresChuckQueryVariables} from "../../operations";



const client = new GraphQLClient("http://localhost:8080/graphql", { fetch });


client
    .request<WheresChuckQuery, WheresChuckQueryVariables>(WheresChuckDocument, {})
    .then(( data ) =>{
        console.log("console.log(data.querySite);" );
        console.log(data.querySite);

        console.log("iterate through the sites");
        if (!data.querySite) {
            console.log("data.querySite is null");
            return; // we need to return here or the compiler will complain about querySite being null
        }
        data.querySite.forEach((site) => {
            if (site) {
                console.log(site.id);
                // site.occupant;
            } else {
                console.log("site is null");
            }
        });
    });


client
    .request<WheresChuckQuery, WheresChuckQueryVariables>(WheresChuckDocument, {})
    .then(( data ) =>{
        console.log("another");
        console.log(data?.querySite?.[0]?.id);
    });
