import {
    CreateExampleObjDocument,
    CreateExampleObjMutation,
    CreateExampleObjMutationVariables,
} from "../../operations";
import {GraphQLClient} from "graphql-request";


export const createExampleObj = () => {
    const client = new GraphQLClient("http://localhost:8080/graphql", { fetch });


    client
        .request<CreateExampleObjMutation, CreateExampleObjMutationVariables>(CreateExampleObjDocument, {
            inputTime: "2021-05-10T23:13:56Z",
        })
        .then(( data ) => {
            console.log(data);
        });

}
