import {Option, none, some, fold} from "fp-ts/Option";

export function getLength(s: Option<string>): Option<number> {
    return fold(() => none, (s: string) => some(s.length))(s);
}