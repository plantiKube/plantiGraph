import { eq, number } from "fp-ts";

type User = {
    userId: number;
    name: string;
};

export const eqUserId = eq.contramap((user: User) => user.userId)(number.Eq);
