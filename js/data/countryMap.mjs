import {Vector} from "../vector.mjs";

const map = [
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , false],
    [false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , false],
    [false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , false],
    [false, true , true , true , true , true , true , true , true , true , true , true , true , true , false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , false],
    [false, true , true , true , true , false, false, false, true , true , true , true , true , false, false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , false],
    [false, true , true , true , false, false, false, false, true , true , true , true , false, false, false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , false],
    [false, true , true , true , false, false, true , true , true , true , true , true , true , false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , false],
    [false, true , true , false, true , true , true , true , true , true , true , true , true , false, false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , false],
    [false, true , true , false, false, true , true , true , true , true , true , true , true , false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , false],
    [false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , false],
    [false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , false, false, true , true , true , true , true , false],
    [false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , false, false, true , true , true , true , false],
    [false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , false, false, false, true , true , true , false],
    [false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , false, false, true , true , true , true , true , false],
    [false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , false, false, true , true , true , true , true , false],
    [false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , false, false, true , true , true , true , false],
    [false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , false, true , true , true , false],
    [false, true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , true , false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
];

const exit = new Vector(24,14);
const start = new Vector(1,1);

export {map, start, exit}