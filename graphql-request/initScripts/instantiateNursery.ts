import {
    CreateGermTrayDocument,
    CreateGermTrayMutation,
    CreateGermTrayMutationVariables, GerminationTray, GerminationTrayRef,
    InstantiateNurseryDocument,
    InstantiateNurseryMutation, InstantiateNurseryMutationVariables,
    SignalType,
    WheresChuckDocument,
    WheresChuckQuery,
    WheresChuckQueryVariables
} from "../../operations";
import {GraphQLClient} from "graphql-request";
import {pipe} from "fp-ts/function";


export function ExpandGerminationBool(signal: boolean): GerminationTrayRef {
    return signal ?
        {
            sites:
                [
                    {
                        signal: {
                            signalDate: "2023-05-10T23:13:56Z",
                            signalType: SignalType.Germinate
                        }
                    }
                ]
        } :
        {
            sites:
                [
                    {
                        signal: {
                            signalDate: "2023-05-10T23:13:56Z",
                            signalType: SignalType.Transfer
                        }
                    }
                ]
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
        const generatedId = data.addNursery.nursery["0"].id
        console.log(generatedId)
    });
}