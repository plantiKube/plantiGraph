import {
    CreateGermTrayDocument, CreateGermTrayMutation, CreateGermTrayMutationVariables,
    SignalType,
    WheresChuckDocument,
    WheresChuckQuery,
    WheresChuckQueryVariables
} from "../../operations";
import {GraphQLClient} from "graphql-request";


export const createGermTrayMutationEffect = () => {

    const client = new GraphQLClient("http://localhost:8080/graphql", {fetch});

    client.request<CreateGermTrayMutation, CreateGermTrayMutationVariables>
    (
        CreateGermTrayDocument,
        {
            xidInput: "GxDEADBEEF23",
            sitesInput: [
                {
                    signal:
                        {
                            signalDate: "2023-05-10T23:13:56Z",
                            signalType: SignalType.Germinate
                        }
                }
            ]
        }
    ).then((data) => {
        console.log(data)
    });
}
