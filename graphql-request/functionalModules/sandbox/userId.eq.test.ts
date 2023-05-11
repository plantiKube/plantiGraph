import {eqUserId} from "./userId.eq";


describe("userId.eq", () => {
    it("returns true when given two users with the same userId", () => {
        expect(eqUserId.equals({ userId: 1, name: "Giulio" }, { userId: 1, name: "Giulio Conti" })).toEqual(true);
    });

    it("returns false when given two users with different userIds", () => {
        expect(eqUserId.equals({ userId: 1, name: "Giulio" }, { userId: 2, name: "Giulio" })).toEqual(false);
    });
});