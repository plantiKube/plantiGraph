import { some, none } from "fp-ts/Option";
import { getLength } from "./fileUnderTest";

describe("getLength", () => {
    it("returns some(length) when given some(string)", () => {
        expect(getLength(some("test"))).toEqual(some(4));
    });

    it("returns none when given none", () => {
        expect(getLength(none)).toEqual(none);
    });
});