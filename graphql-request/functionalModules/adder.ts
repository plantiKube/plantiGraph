import { MonoidSum, MonoidProduct } from "fp-ts/number";
import { concatAll } from "fp-ts/Monoid";

const sum = concatAll(MonoidSum);
const product = concatAll(MonoidProduct);

sum([1, 2, 3, 4]); // 10
product([1, 2, 3, 4]); // 24

