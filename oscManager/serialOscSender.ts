import {Bundle, Client} from 'node-osc';
import {Either} from "fp-ts/Either";


// a bundle without an explicit time tag

function SendValToAll(val: boolean) {
    const client = new Client('127.0.0.1', 3030);
    const oscAddress = '/lx/mixer/channel/1/pattern/1/'
    const bundle = new Bundle();

    for (let i=0; i<32; i++) {
        bundle.append(new Bundle(10, [oscAddress + i, val]));
    }
    client.send(bundle, () => {
        client.close();
    });
}
export function DriveOscBundle(boolEitherArray: Either<Error, boolean>[]) {
    const oscAddress = '/lx/mixer/channel/1/pattern/1/'
    const bundle = new Bundle();
    const client = new Client('127.0.0.1', 3030);

    boolEitherArray.forEach((boolEither, idx) => {
        if (boolEither._tag === "Left") {
            console.log(boolEither.left)
        }
        else {
            bundle.append(new Bundle([oscAddress + idx, boolEither.right]));
        }
    }
    )

    client.send(bundle, () => {
        client.close();
    });
}

SendValToAll(true);
