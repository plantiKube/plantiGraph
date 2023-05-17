import {Bundle, Client} from 'node-osc';

const client = new Client('127.0.0.1', 3030);

const oscAddress = '/lx/mixer/channel/1/pattern/1/'

// a bundle without an explicit time tag
const bundle = new Bundle();

function SendValToAll(val: boolean) {

    for (let i=0; i<32; i++) {
        bundle.append(new Bundle(10, [oscAddress + i, val]));
    }
    client.send(bundle, () => {
        client.close();
    });
}

SendValToAll(true);
