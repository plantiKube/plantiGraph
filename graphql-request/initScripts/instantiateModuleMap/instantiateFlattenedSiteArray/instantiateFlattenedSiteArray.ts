import {GraphQLClient} from "graphql-request";
import {
    InstantiateFlattenedSiteArrayDocument,
    InstantiateFlattenedSiteArrayMutation,
    InstantiateFlattenedSiteArrayMutationVariables, SignalType, SiteRef
} from "../../../../operations";
import * as A from 'fp-ts/lib/Array'
import {pipe} from "fp-ts/function";
import {ExpandSiteRef} from "../../../functionalModules/helpers/helpers";

export const instantiateFlattenedSiteArray = () => {

    /* SETUP */
    const client = new GraphQLClient("http://localhost:8080/graphql", {fetch});
    // const client = new GraphQLClient("http://localhost:8088/graphql", {fetch});

    /* FP DATA SETUP */
    const sitesArrayArray: Array<SiteRef> = [ExpandSiteRef(0), ExpandSiteRef(1)]

    // const desiredSitesPipe: Array<SiteRef> = pipe(
    //     A.range(0, 25), // Creates an array with 26 elements (from 0 to 25)
    //     A.map<number, SiteRef>(ExpandSiteRef)
    // )

    const numElements = 26;
    const siteRefs: Array<SiteRef> = pipe(
        Array(numElements)
            .fill(null)
            .map((_, i) => i), // Create an array of length numElements with values from 0 to numElements - 1
        A.map(ExpandSiteRef)
    );

    /* THE QUERY */
    client.request<InstantiateFlattenedSiteArrayMutation, InstantiateFlattenedSiteArrayMutationVariables>(InstantiateFlattenedSiteArrayDocument,
        {
            // sites: sitesArrayArray
            sites: siteRefs

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


