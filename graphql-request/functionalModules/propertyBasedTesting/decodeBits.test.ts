import * as laws from 'fp-ts-laws'
import * as fc from 'fast-check'
import {decodeBits} from "../../../fn/DeserializeStringToBoolArray";


describe('my bits decoder', () => {
    it('should deserialize these bits into bool array', () => {
        const bits: string = "00011"
        const result = decodeBits(bits)
        console.log(result)
    })
    it('should have a left in the second slot with an error', () => {
        const bits: string = "1x0011"
        const result = decodeBits(bits)
        console.log(result)
    })
})
