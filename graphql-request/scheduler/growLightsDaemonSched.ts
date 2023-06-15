import fetch from "cross-fetch";
import osc from "osc";
import {
    GetClockPoint_FifteenSecondRangeDocument,
    GetClockPoint_FifteenSecondRangeQuery, GetClockPoint_FifteenSecondRangeQueryVariables,
    GetDriveOutputStringQueryVariables
} from "../../operations";
import {GraphQLClient} from "graphql-request";

const client = new GraphQLClient("http://localhost:8080/graphql", { fetch });

function getCurrentTimeAtEpochDate(): Date {
    const now = new Date();

    // Create a new date at the Unix epoch
    const epoch = new Date(0);

    epoch.setUTCHours(now.getHours());
    epoch.setUTCMinutes(now.getMinutes());
    epoch.setUTCSeconds(now.getSeconds());

    // Set the time of the epoch date to the current time
    // epoch.setHours(now.getHours());
    // epoch.setMinutes(now.getMinutes());
    // epoch.setSeconds(now.getSeconds());

    return epoch;
}

function getCurrentTimeAtEpochDate_plus_15sec(): Date {
    const now = new Date();

    // Create a new date at the Unix epoch
    const epoch = new Date(0);

    epoch.setUTCHours(now.getHours());
    epoch.setUTCMinutes(now.getMinutes());
    epoch.setUTCSeconds(now.getSeconds() + 14.999);

    // Set the time of the epoch date to the current time
    // epoch.setHours(now.getHours());
    // epoch.setMinutes(now.getMinutes());
    // epoch.setSeconds(now.getSeconds() + 14.999);

    return epoch;
}

export function sendMessage(value: number) {
    // Create an osc udpPort.
    let udpPort = new osc.UDPPort({
        localAddress: "0.0.0.0",
        localPort: 57121,
        remoteAddress: "127.0.0.1", // replace with your OSC server's IP
        remotePort: 3030 // replace with your OSC server's port
    });

    udpPort.open();
    var msg = {
        address: "/lx/output/brightness",
        args: [value]
    };

    udpPort.send(msg);
}
export const  queryScheduleGraph = () => {

    const timeAtEpoch_string = getCurrentTimeAtEpochDate().toISOString();
    const timeAtEpoch_plus_15sec_string = getCurrentTimeAtEpochDate_plus_15sec().toISOString();
    console.log(timeAtEpoch_string, '\n', timeAtEpoch_plus_15sec_string)

    // const minDate: string = "1970-01-01T13:51:00.000Z";
    // const maxDate: string = "1970-01-01T13:51:14.999Z";
    const minDate: string = timeAtEpoch_string;
    const maxDate: string = timeAtEpoch_plus_15sec_string;


    client
        .request<GetClockPoint_FifteenSecondRangeQuery, GetClockPoint_FifteenSecondRangeQueryVariables>(GetClockPoint_FifteenSecondRangeDocument, {
            min: minDate,
            max: maxDate
        })
        .then((data)=> {
            console.log(data);
        })
}





setInterval(() => {
    const currentDatetime = new Date();
    console.log(currentDatetime.toISOString());
    queryScheduleGraph();
}, 15000); // Logs every 15 second

