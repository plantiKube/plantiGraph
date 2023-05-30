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

const chosenId: string = "0xc355";

const GET_DRIVE_OUTPUTS_PRESET = gql`
    subscription sub{
        getChosenDriveOutputPreset
        (id: "${chosenId}" )
        {
            id
            preset {
                boolArrayString
                lxEndpoint {addr {addr} port {port}}
            }
        }
    }
`;

client.request({
    query: GET_DRIVE_OUTPUTS_PRESET
}).subscribe({
    next(data: any) {
        console.log('Received data: ', data);
        let outputDriveString: string = data.data.getChosenDriveOutputPreset.preset.boolArrayString;

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
