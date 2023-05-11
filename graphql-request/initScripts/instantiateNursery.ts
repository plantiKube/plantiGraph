import {
    CreateGermTrayDocument,
    CreateGermTrayMutation,
    CreateGermTrayMutationVariables, GerminationTrayRef,
    InstantiateNurseryDocument,
    InstantiateNurseryMutation, InstantiateNurseryMutationVariables,
    SignalType,
    WheresChuckDocument,
    WheresChuckQuery,
    WheresChuckQueryVariables
} from "../../operations";
import {GraphQLClient} from "graphql-request";


export const instantiateNurseryEffect = () => {

    const client = new GraphQLClient("http://localhost:8080/graphql", {fetch});

    // Ok we're going to build our germTraysArray

    const desiredGerminationTrays: Array<GerminationTrayRef> = new Array<GerminationTrayRef>();


    client.request<InstantiateNurseryMutation, InstantiateNurseryMutationVariables>
    (
        InstantiateNurseryDocument,
        {
            nurseryXid: "abcd",
            germTraysArray: [
                {
                    xid: "flie223",
                    sites:
                    [
                        {
                            xid: "flie2",
                            signal: {
                                xid: "s00001",
                                signalDate: "2023-05-10T23:13:56Z",
                                signalType: SignalType.Germinate
                            }
                        }
                    ]

                }
            ]
        }
    ).then((data) => {
        console.log(data)
    });
}