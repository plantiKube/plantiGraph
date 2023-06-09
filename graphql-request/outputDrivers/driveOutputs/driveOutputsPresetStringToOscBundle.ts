import fetch from "cross-fetch";
import { GraphQLClient } from "graphql-request";
import {
    DriveOutputsPresetHasFilter,
    GetDriveOutputStringDocument,
    GetDriveOutputStringQuery, GetDriveOutputStringQueryVariables,
} from "../../../operations";

import {decodeBits} from "../../../fn/DeserializeStringToBoolArray";
import {DriveOscBundle} from "../../../oscManager/serialOscSender";



export const GetDriveOutputsString = () => {

    const client = new GraphQLClient("http://localhost:8080/graphql", { fetch });

    client
        .request<GetDriveOutputStringQuery, GetDriveOutputStringQueryVariables>(GetDriveOutputStringDocument,
            {
                driveOutputsID: "0xc3b3"
            }
        )
        .then(( data ) =>
        {
            console.log("...GetDriveOutputsString")
            console.log(data.getDriveOutputsPreset.boolArrayString)


            // alright.. deserialize the string and send it out over OSC.
            const boolEitherArray = decodeBits(data.getDriveOutputsPreset.boolArrayString);
            DriveOscBundle("/lx/mixer/channel/sw/pattern/LinearMap/", boolEitherArray);
        });
}
