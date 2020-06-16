import {Vector} from "../vector.mjs";

const map =[
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, true , false, true , true , true , true , false, true , true , false, true , true , true , true , true , true , false, true , true , false, true , false, true , true , true , true , true , true , false],
    [false, true , false, true , false, false, true , false, true , false, false, true , false, false, true , false, true , false, false, true , false, true , false, true , false, true , false, false, true , false],
    [false, true , true , true , true , false, true , true , true , true , true , true , false, true , false, true , true , true , true , true , true , true , false, true , false, true , true , false, true , false],
    [false, true , false, false, false, false, true , false, false, false, false, false, true , true , true , true , false, true , false, false, true , false, true , true , true , false, false, true , true , false],
    [false, true , false, true , true , false, true , true , false, true , true , true , false, false, true , false, true , true , true , true , true , true , true , false, false, true , true , true , false, false],
    [false, true , false, true , true , true , false, true , false, false, false, true , true , false, false, true , true , false, false, true , false, true , false, true , true , true , false, true , true , false],
    [false, true , true , true , false, true , false, true , true , true , false, true , false, true , true , true , false, true , true , false, true , false, true , true , true , false, false, false, false, false],
    [false, false, false, false, false, true , false, false, false, true , false, true , true , true , false, false, false, false, true , true , true , false, false, false, true , true , true , true , true , false],
    [false, true , true , true , true , true , true , true , false, false, false, false, true , false, true , true , true , true , false, false, true , true , true , true , false, true , false, true , false, false],
    [false, true , false, false, false, false, false, true , false, true , true , true , true , true , false, false, true , false, true , true , false, true , false, true , false, true , false, true , true , false],
    [false, true , true , true , true , true , false, true , false, true , false, false, false, false, true , true , true , true , true , false, true , true , true , true , false, true , false, false, true , false],
    [false, true , false, false, true , true , false, true , false, true , true , true , false, false, true , true , false, true , true , false, true , true , false, false, true , true , false, true , true , false],
    [false, true , false, true , true , false, false, true , true , true , false, false, false, true , true , false, true , true , false, true , false, true , true , true , true , false, false, true , false, false],
    [false, true , true , false, true , true , false, false, false, false, true , true , true , false, true , false, true , false, true , true , true , false, true , false, true , true , false, false, true , false],
    [false, false, false, false, false, true , false, true , false, true , true , false, true , false, true , false, true , true , false, false, true , false, true , true , false, true , true , true , true , false],
    [false, true , true , true , true , true , false, true , false, true , false, true , true , false, true , false, false, true , false, false, true , true , true , true , true , false, true , true , false, false],
    [false, true , false, false, false, false, false, true , false, true , false, true , false, false, true , true , false, true , false, true , false, true , false, true , false, false, true , false, true , false],
    [false, true , true , true , true , true , false, true , true , true , false, true , true , true , true , true , false, true , true , true , true , true , true , false, true , true , true , true , true , false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
];
const exit = new Vector(7,15);

export {map, exit}