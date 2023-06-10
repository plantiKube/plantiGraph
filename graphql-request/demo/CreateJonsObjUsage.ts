import {GraphQLClient} from "graphql-request";
import {CreateJonsObjDocument, CreateJonsObjMutation, CreateJonsObjMutationVariables} from "../../operations";

export const createJonsObjUsage = () => {
    const client = new GraphQLClient("http://localhost:8080/graphql", {fetch});


    client
        .request<CreateJonsObjMutation, CreateJonsObjMutationVariables>(CreateJonsObjDocument,
            {
                "jonStringData": "hello JON",
                "someTime": "2023-06-10T18:24:15Z"
            })
        .then((data) => {
            console.log(data);
        });
}
