import {Vector} from "./vector.mjs";
import {MazeView} from "./mazeView.mjs";
import {Maze} from "./maze.mjs";

import {Queue, Stack, SortList} from "./dynamicStructures.mjs";

// import {map, start, exit} from "./data/simpleMaze.mjs";
// import {map, start, exit} from "./data/largeMaze.mjs";
import {map, start, exit} from "./data/countryMap.mjs";


const delay = 100;


window.addEventListener('DOMContentLoaded', function(){

    const view = new MazeView("maze", map, exit);
    const maze = new Maze(map);

    async function queueSolve() {
        const queue = new Queue();

        maze.setMark(start);
        // nastavím frontu na první políčko
        queue.enqueue({
            location: start,
            step: 0
        });

        while (queue.count() > 0) {
            await timer(delay);

            // vyjmi z fronty
            const {location: current, step} = queue.dequeue();

            view.makeCurrent(current);
            view.setText(current, step);

            // pokud už jsem na konci, skončím procházení
            if (current.equals(exit)) {
                break;
            }

            // vezmi sousedy a dej je do fronty
            const neighbors = maze.neighbors(current);
            for (let neighbor of neighbors) {
                // když už jsem tam byl, půjdu dál
                if (maze.getMark(neighbor))
                    continue;

                //dám nového do fronty
                queue.enqueue({
                    location: neighbor,
                    step: step + 1
                })

                maze.setMark(neighbor);
                view.makeExpected(neighbor);
            }

        }
    }

    async function stackSolve() {
        const stack = new Stack();

        maze.setMark(start);
        // nastavím frontu na první políčko
        stack.push({
            location: start,
            step: 0
        });

        while (stack.count() > 0) {
            await timer(delay);

            // vyjmi z fronty
            const {location: current, step} = stack.pop();

            view.makeCurrent(current);
            view.setText(current, step);

            // pokud už jsem na konci, skončím procházení
            if (current.equals(exit)) {
                break;
            }

            // vezmi sousedy a dej je do fronty
            const neighbors = maze.neighbors(current);
            for (let neighbor of neighbors) {
                // když už jsem tam byl, půjdu dál
                if (maze.getMark(neighbor))
                    continue;

                //dám nového do fronty
                stack.push({
                    location: neighbor,
                    step: step + 1
                });

                maze.setMark(neighbor);
                view.makeExpected(neighbor);
            }

        }
    }

    // queueSolve();
    stackSolve();

});

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}
