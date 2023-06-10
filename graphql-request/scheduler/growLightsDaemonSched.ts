import fetch from "cross-fetch";
import {
    GetClockPoint_FifteenSecondRangeDocument,
    GetClockPoint_FifteenSecondRangeQuery, GetClockPoint_FifteenSecondRangeQueryVariables,
    GetDriveOutputStringQueryVariables
} from "../../operations";
import {GraphQLClient} from "graphql-request";



setInterval(() => {
    const currentDatetime = new Date();
    console.log(currentDatetime.toISOString());
    queryScheduleGraph();
}, 2000); // Logs every 1 second


const client = new GraphQLClient("http://localhost:8080/graphql", { fetch });

export const  queryScheduleGraph = () => {
    const minDate: string = "1970-01-01T13:51:00.000Z";
    const maxDate: string = "1970-01-01T13:51:14.999Z";
    client
        .request<GetClockPoint_FifteenSecondRangeQuery, GetClockPoint_FifteenSecondRangeQueryVariables>(GetClockPoint_FifteenSecondRangeDocument, {
            min: minDate,
            max: maxDate
        })
        .then((data)=> {
            console.log(data);
        })
}

