import {SignalType, SiteRef} from "../../../operations";


export function ExpandSiteRef(i: number): SiteRef {
    if (i%2==0) {
        return {
            uuid: i,
            signal: {
                signalDate: "2023-05-10T23:13:56Z",
                signalType: SignalType.Transfer
            }
        }
    }
    else {
        return {
            uuid: i,
            signal: null
        }
    }
}

