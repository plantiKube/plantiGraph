const { SubscriptionClient } = require('subscriptions-transport-ws');
const gql = require('graphql-tag');
const WebSocket = require('ws');

const GRAPHQL_ENDPOINT = 'ws://localhost:8080/graphql';

const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
    reconnect: true
}, WebSocket);

const GET_DRIVE_OUTPUTS_PRESET = gql`
    subscription NoVarSub {
        getDriveOutputsPreset(id: "0xc3b3") {
            boolArrayString
        }
    }
`;


client.request({
    query: GET_DRIVE_OUTPUTS_PRESET
}).subscribe({
    next(data) {
        console.log('Received data: ', data);


    },
    error(err) {
        console.error('Error occurred: ', err);
    },
    complete() {
        console.log('Subscription operation completed');
    },
});
