import {Vector} from "./vector.mjs";

class MazeView {

    parentNode;
    nodeList;

    /**
     *
     * @param {string} parentId
     * @param {boolean[][]} map
     * @param {Vector} exit
     */
    constructor(parentId, map, exit) {
        // save parent node
        const parent = document.getElementById(parentId);
        if (parent) {
            this.parentNode = parent;
        } else {
            throw new Error("Invalid maze container ID");
        }

        // create elements for each maze field
        this.nodeList = [];
        for (let y = 0; y < map.length; y++) {
            this.nodeList[y] = [];
            for (let x = 0; x < map[y].length; x++) {
                const cell = document.createElement("div");
                cell.style.gridColumn = x + 1;
                cell.style.gridRow = y + 1;

                // walls have false in map
                if (map[y][x]) {
                    cell.classList.add("tile");
                } else {
                    cell.classList.add("wall");
                }

                // mark exit with class
                if (exit.equals(new Vector(x, y)))
                    cell.classList.add("exit");

                parent.appendChild(cell);
                this.nodeList[y][x] = cell;
            }
        }
    }

    /**
     * Writes text at given location
     * @param {Vector} location
     * @param {string} text
     */
    setText(location, text) {
        this.nodeList[location.y][location.x].innerText = text;
    }

    /**
     * Sets given location as current, previous "current" as visited
     * @param {Vector} location
     */
    makeCurrent(location) {
        for (let node of this.parentNode.querySelectorAll("div.current")) {
            node.classList.remove("current");
            node.classList.add("visited");
        }
        const current = this.nodeList[location.y][location.x];
        current.classList.remove("expected");
        current.classList.add("current");
    }

    /**
     * Sets given location as expected to visit
     * @param {Vector} location
     */
    makeExpected(location) {
        const current = this.nodeList[location.y][location.x];
        current.classList.add("expected");
    }

}

export {MazeView};