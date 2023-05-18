import { SubscriptionClient } from 'subscriptions-transport-ws';
import gql from 'graphql-tag';
// @ts-ignore
import WebSocket from 'ws';

const GRAPHQL_ENDPOINT: string = 'ws://localhost:8080/graphql';

const client: SubscriptionClient = new SubscriptionClient(GRAPHQL_ENDPOINT, {
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
    next(data: any) {
        console.log('Received data: ', data);
    },
    error(err: Error) {
        console.error('Error occurred: ', err);
    },
    complete() {
        console.log('Subscription operation completed');
    },
});
