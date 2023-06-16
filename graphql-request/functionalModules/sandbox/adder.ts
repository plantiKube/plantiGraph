import { MonoidSum, MonoidProduct } from "fp-ts/number";
import { concatAll } from "fp-ts/Monoid";

export const sum = concatAll(MonoidSum);
export const product = concatAll(MonoidProduct);

sum([1, 2, 3, 4]); // 10
product([1, 2, 3, 4]); // 24
