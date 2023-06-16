import {GraphQLClient} from "graphql-request";
import {
    InstantiateFlattenedSiteArrayDocument,
    InstantiateFlattenedSiteArrayMutation,
    InstantiateFlattenedSiteArrayMutationVariables, SignalType
} from "../../../../operations";

export const instantiateFlattenedSiteArray = () => {

    const client = new GraphQLClient("http://localhost:8080/graphql", {fetch});

    client.request<InstantiateFlattenedSiteArrayMutation, InstantiateFlattenedSiteArrayMutationVariables>(InstantiateFlattenedSiteArrayDocument,
        {
            "sites": [
                {
                    "signal":{
                        "signalType": SignalType.Germinate,
                        "signalDate":"2023-06-16T19:07:09Z"
                    }
                }
            ]
        }
        ).then((data) => {
        console.log(data)
        let oneFlattenedSiteID = data.addFlattenedSiteArray.flattenedSiteArray["0"].id;
        console.log(oneFlattenedSiteID)
    });
}
