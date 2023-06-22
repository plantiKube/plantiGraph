import {GraphQLClient} from "graphql-request";
import {
    GetFlattenedSiteArrayDocument,
    GetFlattenedSiteArrayQuery,
    GetFlattenedSiteArrayQueryVariables
} from "../../../operations";
import {DriveOscBundle} from "../../../oscManager/serialOscSender";
import {decodeBits} from "../../../fn/DeserializeStringToBoolArray";
import {Either, left, right} from "fp-ts/lib/Either";
import {queryScheduleGraph} from "../../scheduler/growLightsDaemonSched";

export const GetFlattenedSiteArray = () => {
    const client = new GraphQLClient("http://localhost:8080/graphql", { fetch });
    // const client = new GraphQLClient("http://localhost:8088/graphql", { fetch });

    client.request<GetFlattenedSiteArrayQuery, GetFlattenedSiteArrayQueryVariables>(GetFlattenedSiteArrayDocument,
        {
            id:"0x1c789"
            // id: "0x2727"
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


setInterval(() => {
    const currentDatetime = new Date();
    console.log(currentDatetime.toISOString());
    GetFlattenedSiteArray();
}, 2000); // Logs every 15 second

