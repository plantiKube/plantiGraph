import {
    CreateGermTrayDocument,
    CreateGermTrayMutation,
    CreateGermTrayMutationVariables, GerminationTray, GerminationTrayRef,
    InstantiateNurseryDocument,
    InstantiateNurseryMutation, InstantiateNurseryMutationVariables,
    SignalType, SiteRef,
} from "../../operations";
import {GraphQLClient} from "graphql-request";
import {pipe} from "fp-ts/function";
import * as A from 'fp-ts/lib/Array'


function ExpandSiteRef(i: number): SiteRef {
    console.log(i)
    return {
        signal: {
            signalDate: "2023-05-10T23:13:56Z",
            signalType: SignalType.Transfer
        }
    }
}

export function ExpandGerminationBool(signal: boolean): GerminationTrayRef {
    // expand out the sites

    const foo = [1, 2, 3]
    const bar = ['a', 'b', 'c']
    const zipped = pipe(foo, A.zip(bar))
    console.log(zipped)

    const desiredSites: Array<SiteRef> = A.map<number, SiteRef>(ExpandSiteRef)([1, 2, 3])

    console.log(desiredSites)

    const desiredSitesPipe: Array<SiteRef> = pipe(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        A.map<number, SiteRef>(() => {
            return {
                signal: {
                    signalDate: "2023-05-10T23:13:56Z",
                    signalType: SignalType.Transfer
                }
            }
        })
        // A.map(ExpandSiteRef)
    )

    console.log(desiredSitesPipe)

    return signal ?
        {
            sites: desiredSites
        } :
        {
            sites: desiredSitesPipe
        }
}

export const instantiateNurseryEffect = () => {

    const client = new GraphQLClient("http://localhost:8080/graphql", {fetch});

    // Ok we're going to build our germTraysArray

    const desiredGerminationTrays: Array<GerminationTrayRef> = pipe(
        [false, true, true, false, false, false, false],
        (bools) => bools.map(ExpandGerminationBool),
    )

    // console.log(desiredGerminationTrays)

    client.request<InstantiateNurseryMutation, InstantiateNurseryMutationVariables>
    (
        InstantiateNurseryDocument,
        {
            germTraysArray: desiredGerminationTrays
        }
    ).then((data) => {
        console.log(data)
        const generatedId = data.addNursery?.nursery["0"].id
        console.log(generatedId)
    });
}
