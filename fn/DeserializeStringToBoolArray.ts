import {Either, Left, left, Right, right} from "fp-ts/Either";
import { pipe } from "fp-ts/function";

type Bit = '0' | '1';

const decodeBit = (bit: Bit): Either<Error, boolean> =>
    bit === '0' ? right(false) :
        bit === '1' ? right(true) :
            left(new Error(`Invalid bit: ${bit}`));

export const decodeBits = (s: string): Either<Error, boolean>[] =>
{
    const bits = pipe(
        Array.from(s) as Bit[],
        bits => bits.map(decodeBit),
    );
    // console.log(bits)
    return bits
}



// Usage
// const result = decodeBits('01010101');
