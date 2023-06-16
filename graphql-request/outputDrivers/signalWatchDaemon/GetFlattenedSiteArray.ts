import {GraphQLClient} from "graphql-request";
import {
    GetFlattenedSiteArrayDocument,
    GetFlattenedSiteArrayQuery,
    GetFlattenedSiteArrayQueryVariables
} from "../../../operations";
import {DriveOscBundle} from "../../../oscManager/serialOscSender";
import {decodeBits} from "../../../fn/DeserializeStringToBoolArray";
import {Either, left, right} from "fp-ts/lib/Either";

export const GetFlattenedSiteArray = () => {
    const client = new GraphQLClient("http://localhost:8080/graphql", { fetch });

    client.request<GetFlattenedSiteArrayQuery, GetFlattenedSiteArrayQueryVariables>(GetFlattenedSiteArrayDocument,
        {
            id:"0x1c789"
        }
    ).then((data) => {
        console.log(data)
        let oscBundle: Either<Error, boolean>[] = data.getFlattenedSiteArray.sites.map((site) => {
            if (site.signal == null){
                return right(false)
            } else {
                return right(true)
            }
        });
        console.log(oscBundle)

        DriveOscBundle("/lx/mixer/channel/1/pattern/1/", oscBundle);

    })
}
