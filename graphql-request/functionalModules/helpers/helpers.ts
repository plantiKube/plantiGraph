import {SignalType, SiteRef} from "../../../operations";


export function ExpandSiteRef(i: number): SiteRef {
    console.log(i)
    return {
        signal: {
            signalDate: "2023-05-10T23:13:56Z",
            signalType: SignalType.Transfer
        }
    }
}

