import {Vector} from "./vector.mjs";
import {MazeView} from "./mazeView.mjs";
import {Maze} from "./maze.mjs";

import {Queue} from "./dynamicStructures.mjs";
import {Stack} from "./dynamicStructures.mjs";
import {SortList} from "./dynamicStructures.mjs";

// import {map, start, exit} from "./data/simpleMaze.mjs";
import {map, start, exit} from "./data/largeMaze.mjs";
// import {map, start, exit} from "./data/countryMap.mjs";


const delay = 150;


window.addEventListener('DOMContentLoaded', function(){

    const view = new MazeView("maze", map, exit,);
    const maze = new Maze(map);
    
    maze.setMark(start, true);

    start.step = 0;

    async function queueSolve() {
        const queue = new Queue();
        queue.enqueue(start);

        while (queue.count() > 0) {
            await timer(delay);
            const current = queue.dequeue();

            view.makeCurrent(current);
            view.setText(current, current.step);

            if (current.equals(exit))
                break;

            for (let neighbor of maze.neighbors(current)) {
                if (!maze.getMark(neighbor)) {
                    neighbor.step = current.step + 1;

                    queue.enqueue(neighbor);

                    maze.setMark(neighbor);
                    view.makeExpected(neighbor);
                }
            }

        }
    }

    async function stackSolve() {
        const stack = new Stack();
        stack.push(start);

        while (stack.count() > 0) {

            await timer(delay);
            const current = stack.pop();

            view.makeCurrent(current);
            view.setText(current, current.step);

            if (current.equals(exit))
                break;

            for (let neighbor of maze.neighbors(current)) {
                if (!maze.getMark(neighbor)) {
                    neighbor.step = current.step + 1;

                    stack.push(neighbor);

                    maze.setMark(neighbor);
                    view.makeExpected(neighbor);
                }
            }

        }
    }

    async function sortedSolve() {
        const list = new SortList("distance");
        start.distance = start.distFrom(exit);
        list.put(start);

        while (list.count() > 0) {

            await timer(delay);
            const current = list.get();

            view.makeCurrent(current);
            view.setText(current, current.step);

            if (current.equals(exit))
                break;

            for (let neighbor of maze.neighbors(current)) {
                if (!maze.getMark(neighbor)) {
                    neighbor.step = current.step + 1;

                    neighbor.distance = neighbor.distFrom(exit);
                    list.put(neighbor);

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


