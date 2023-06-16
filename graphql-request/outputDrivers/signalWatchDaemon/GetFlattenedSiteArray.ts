import {GraphQLClient} from "graphql-request";
import {
    GetFlattenedSiteArrayDocument,
    GetFlattenedSiteArrayQuery,
    GetFlattenedSiteArrayQueryVariables
} from "../../../operations";


export const GetFlattenedSiteArray = () => {
    const client = new GraphQLClient("http://localhost:8080/graphql", { fetch });

    client.request<GetFlattenedSiteArrayQuery, GetFlattenedSiteArrayQueryVariables>(GetFlattenedSiteArrayDocument,
        {
            id:"0x1c70b"
        }
    ).then((data) => {
        console.log(data)
    })
}
