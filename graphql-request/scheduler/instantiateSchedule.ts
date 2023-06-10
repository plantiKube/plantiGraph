import {
    ClockNodePointRef,
    CreateClockMutationDocument, CreateClockMutationMutation, CreateClockMutationMutationVariables,
} from "../../operations";
import {GraphQLClient} from "graphql-request";


const getDateWithSecondsOffset = (date, seconds) => {
    return new Date(date.getTime() + seconds*1000);
}

export const createSchedulerNodes = () => {
    const SECONDS_PER_PERIOD = 15;

    const client = new GraphQLClient("http://localhost:8080/graphql", {fetch});

    let nodes: Array<ClockNodePointRef> = [];

    let epochZero: Date = new Date(0);
    // non-functional way of instantiating this array.
    // const NODES_IN_A_DAY= 24 * 60 * 60; // the number of seconds

    const NODES_IN_A_DAY= 24 * 60 * (60/SECONDS_PER_PERIOD); // once every 15 seconds.
    for (let i = 0; i < NODES_IN_A_DAY; i++) {
        let outputState = 0;

        if (i < 8*60*4) { // 8am ;; 15 sec intervals
            outputState = 0;
        } else {
            outputState = 1;
        }
        nodes.push({
            xid: i,
            outputState: outputState,
            timeOfDay: getDateWithSecondsOffset(epochZero, i*15).toISOString()
        })
    }


    client.request<CreateClockMutationMutation, CreateClockMutationMutationVariables>
    (
        CreateClockMutationDocument,
        {
            pointsList: nodes
        }
    ).then((data) => {
        console.log(data)
        console.log(data.addAutomationClockMeta.automationClockMeta["0"].id)
    });
}

createSchedulerNodes();
