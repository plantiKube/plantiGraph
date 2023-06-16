import {GraphQLClient} from "graphql-request";
import {
    InstantiateFlattenedSiteArrayDocument,
    InstantiateFlattenedSiteArrayMutation,
    InstantiateFlattenedSiteArrayMutationVariables, SignalType, SiteRef
} from "../../../../operations";
import {ExpandSiteRef} from "../../instantiateNursery/instantiateNursery";

export const instantiateFlattenedSiteArray = () => {

    /* SETUP */
    const client = new GraphQLClient("http://localhost:8080/graphql", {fetch});

    /* FP DATA SETUP */
    const sitesArrayArray: Array<SiteRef> = [ExpandSiteRef(0), ExpandSiteRef(1)]

    /* THE QUERY */
    client.request<InstantiateFlattenedSiteArrayMutation, InstantiateFlattenedSiteArrayMutationVariables>(InstantiateFlattenedSiteArrayDocument,
        {
            sites: sitesArrayArray

            // "sites": [
            //     {
            //         "signal":{
            //             "signalType": SignalType.Germinate,
            //             "signalDate":"2023-06-16T19:07:09Z"
            //         }
            //     }
            // ]
        }
        ).then((data) => {
        console.log(data)
        let oneFlattenedSiteID = data.addFlattenedSiteArray.flattenedSiteArray["0"].id;
        console.log(oneFlattenedSiteID)
    });
}
