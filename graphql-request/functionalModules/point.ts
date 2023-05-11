import { MonoidSum } from "fp-ts/number";
import { concatAll, struct } from "fp-ts/Monoid";

type Point = {
    x: number;
    y: number;
};

const monoidPoint = struct({
    x: MonoidSum,
    y: MonoidSum,
});

const monoidPoints = concatAll(monoidPoint);

monoidPoint.concat({ x: 0, y: 3 }, { x: 2, y: 4 }); // { x: 2, y: 7 }
monoidPoints([
    { x: 2, y: 2 },
    { x: 2, y: 2 },
    { x: 2, y: 2 },
]); // { x: 6, y: 6 }