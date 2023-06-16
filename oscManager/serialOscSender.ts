import {Bundle, Client} from 'node-osc';
import {Either} from "fp-ts/Either";


// a bundle without an explicit time tag

function SendValToAll(val: boolean) {
    const client = new Client('127.0.0.1', 3030);
    const oscAddress = '/lx/mixer/channel/sw/pattern/LinearMap/'
    const bundle = new Bundle();

    for (let i=0; i<32; i++) {
        bundle.append(new Bundle(10, [oscAddress + i, val]));
    }
    client.send(bundle, () => {
        client.close();
    });
}

function paramNameByIdx(idx: number) {
    let paramNameMap: string[] = [
        "0_DELIVERY",
        "PUMP.mod",
        "BORKED.ph",
        "LEFT.1.ph",
        "LEFT.2.ph",
        "FAUCET.ph",
        "RIGHT.1.ph",
        "LEFT.1.ph",
        "H20.ph",
        "ENTER.mod",
        "EXIT.mod",
        "PASS.mod",
        "RETURN.mod",
        "PUMP.mod",
        "PUMP.ph",
        "GROW.0",
        "GROW.1",
        "GROW.2",
        "GROW.3",
        "GROW.4",
        "GROW.5",
        "GROW.6",
        "GROW.7",
        "GROW.8",
        "GROW.9",
        "GROW.10",
        "GROW.11",
        "GROW.12",
        "GROW.13",
        "GROW.14",
        "GROW.15",
        "NA.0",
        "NA.1",
        ];
    return idx + "_" + paramNameMap[idx];
}
export function DriveOscBundle(oscAddress: String, boolEitherArray: Either<Error, boolean>[]) {
    // const oscAddress = '/lx/mixer/channel/sw/pattern/LinearMap/'
    const bundle = new Bundle();
    const client = new Client('127.0.0.1', 3030);
    // const client = new Client('100.126.16.85', 3030);



    boolEitherArray.forEach((boolEither, idx) => {
        if (boolEither._tag === "Left") {
            console.log(boolEither.left)
        }
        else {
            // let oscTarget: string = oscAddress + paramNameByIdx(idx);
            let oscTarget: string = oscAddress + idx.toString();
            console.log(oscTarget);
            bundle.append(new Bundle([oscTarget, boolEither.right]));
        }
    }
    )

    client.send(bundle, () => {
        client.close();
    });
}

SendValToAll(true);
