import {
    ClockNodePointRef,
    CreateClockMutationDocument, CreateClockMutationMutation, CreateClockMutationMutationVariables,
} from "../../operations";
import {GraphQLClient} from "graphql-request";


export const createSchedulerNodes = () => {

    const client = new GraphQLClient("http://localhost:8080/graphql", {fetch});

    let nodes: Array<ClockNodePointRef> = [];


    // non-functional way of instantiating this array.
    // const NODES_IN_A_DAY= 24 * 60 * 60; // the number of seconds
    const NODES_IN_A_DAY= 24 * 60 * 4; // once every 15 seconds.
    for (let i = 0; i < NODES_IN_A_DAY; i++) {
        let outputState = 0;
        if (i < 8*60*4) { // 8am ;; 1 sec intervals
            outputState = 0;
        } else {
            outputState = 1;
        }
        nodes.push({
            xid: i,
            outputState: outputState
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
