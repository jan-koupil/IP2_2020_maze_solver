import {Vector} from "./vector.mjs";
import {MazeView} from "./mazeView.mjs";
import {Maze} from "./maze.mjs";

import {Queue} from "./dynamicStructures.mjs";
import {Stack} from "./dynamicStructures.mjs";
import {SortList} from "./dynamicStructures.mjs";

// import {map, start, exit} from "./data/simpleMaze.mjs";
import {map, start, exit} from "./data/largeMaze.mjs";
// import {map, start, exit} from "./data/countryMap.mjs";


const delay = 50;


window.addEventListener('DOMContentLoaded', function(){


});

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}
