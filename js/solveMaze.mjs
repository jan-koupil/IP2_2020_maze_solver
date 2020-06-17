import {Vector} from "./vector.mjs";
import {MazeView} from "./mazeView.mjs";
import {Maze} from "./maze.mjs";

import {Queue, Stack, SortList} from "./dynamicStructures.mjs";

// import {map, start, exit} from "./data/simpleMaze.mjs";
// import {map, start, exit} from "./data/largeMaze.mjs";
import {map, start, exit} from "./data/countryMap.mjs";


const delay = 50;


window.addEventListener('DOMContentLoaded', function(){

    const view = new MazeView("maze", map, exit,);
    const maze = new Maze(map);
    

    async function queueSolve() {

        const queue = new Queue();

        maze.setMark(start, true);
        queue.enqueue({
            location: start,
            step: 0
        });

        while (queue.count() > 0) {
            await timer(delay);
            const {location: current, step} = queue.dequeue();

            view.makeCurrent(current);
            view.setText(current, step);

            if (current.equals(exit))
                break;

            for (let neighbor of maze.neighbors(current)) {
                if (!maze.getMark(neighbor)) {
                    queue.enqueue({
                        location: neighbor,
                        step: step + 1
                    });

                    maze.setMark(neighbor);
                    view.makeExpected(neighbor);
                }
            }

        }
    }

    async function stackSolve() {

        const stack = new Stack();

        maze.setMark(start, true);
        stack.push({
            location:
            start, step: 0
        });

        while (stack.count() > 0) {

            await timer(delay);
            const {location: current, step} = stack.pop();

            view.makeCurrent(current);
            view.setText(current, step);

            if (current.equals(exit))
                break;

            for (let neighbor of maze.neighbors(current)) {
                if (!maze.getMark(neighbor)) {
                    stack.push({
                        location: neighbor,
                        step: step + 1
                    });

                    maze.setMark(neighbor);
                    view.makeExpected(neighbor);
                }
            }

        }
    }

    async function sortedSolve() {

        const list = new SortList("distance");

        maze.setMark(start, true);
        list.put({
            location: start,
            step: 0,
            distance:start.distFrom(exit)
        });

        while (list.count() > 0) {

            await timer(delay);
            const {location: current, step: step} = list.get(); // distance not necessary here, thrown away

            view.makeCurrent(current);
            view.setText(current, step);

            if (current.equals(exit))
                break;

            for (let neighbor of maze.neighbors(current)) {
                if (!maze.getMark(neighbor)) {
                    neighbor.step = current.step + 1;

                    list.put({
                        location: neighbor,
                        step: step + 1,
                        distance: neighbor.distFrom(exit)
                    });

                    maze.setMark(neighbor);
                    view.makeExpected(neighbor);
                }
            }

        }
    }

    sortedSolve();

});

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}


