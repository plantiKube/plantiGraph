import { SubscriptionClient } from 'subscriptions-transport-ws';
import gql from 'graphql-tag';
// @ts-ignore
import WebSocket from 'ws';
import {DriveOscBundle} from "../oscManager/serialOscSender";
import {decodeBits} from "../fn/DeserializeStringToBoolArray";

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
        let outputDriveString: string = data.data.getDriveOutputsPreset.boolArrayString;
        console.log('Drive String: ', outputDriveString);

        DriveOscBundle(decodeBits(outputDriveString));
    },
    error(err: Error) {
        console.error('Error occurred: ', err);
    },
    complete() {
        console.log('Subscription operation completed');
    },
});
