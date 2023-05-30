import {DriveOscBundle} from "./serialOscSender";
import {decodeBits} from "../fn/DeserializeStringToBoolArray";

describe('driveOutputString', function () {
    it('runs', function () {
        const boolEitherArray = decodeBits("10010111");
        DriveOscBundle(boolEitherArray)
    });
});
