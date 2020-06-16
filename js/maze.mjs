import {Vector} from "./vector.mjs";

/**
 * Primitive list of differences to 4 neighboring positions
 * @type {Vector[]}
 */
const steps = [
    new Vector(0,1),
    new Vector(-1,0),
    new Vector(0,-1),
    new Vector(1,0),
];

class Maze {

    map;
    markMap;
    width;
    height;

    /**
     *
     * @param {boolean[][]} map
     */
    constructor(map) {
        this.setMap(map);
    }

    /**
     * Checks if the map is rectangular, not empty and of valid type
     * @param {boolean[][]} map
     * @throws {Error}
     */
    setMap(map) {
        const height = map.length;
        if (!height) throw new Error("Empty maze");
        
        const width = map[0].length;
        if (!width) throw new Error("Empty maze");

        for (let y = 0; y < height; y++) {
            if (map[y].length !== width)
                throw new Error("Maze not rectangular");
            for (let x = 0; x < width; x++) {
                if (typeof map[y][x] !== "boolean")
                    throw new Error(`Invalid maze value at [${x}, ${y}]`);
            }
        }

        this.map = map;
        this.width = width;
        this.height = height;

        this.markMap = [];
        for (let y = 0; y < height; y++) {
            const row = [];
            for (let x = 0; x < width; x++) {
                row.push(false);
            }
            this.markMap.push(row);
        }

    }

    /**
     * Can these coordinates be entered (ie. inside maze boundaries and not a wall)?
     * @param {Vector} coords
     * @returns {boolean}
     */
    canEnter(coords) {
        return (
            coords.x >= 0
            && coords.y >= 0
            && coords.x < this.width
            && coords.y < this.height
            && this.map[coords.y][coords.x]
        );
    }

    /**
     * Returns a list of coordinates neighboring with given vector, that can be entered
     * @param {Vector} coords
     * @returns {Vector[]}
     */
    neighbors(coords) {
        const neighborList = [];
        for (let step of steps) {
            const neighbor = coords.add(step);
            if (this.canEnter(neighbor))
                neighborList.push(neighbor);
        }
        return neighborList;
    }

    /**
     * Marks a field (usually meaning "visited")
     * @param {Vector} coords
     * @param {boolean|string} [markValue = true] mark to set
     */
    setMark(coords, markValue) {
        if (markValue === undefined)
            markValue = true;
        this.markMap[coords.y][coords.x] = markValue;
    }

    /**
     * gets a mark set at coordinates
     * @param {Vector} coords
     * @returns {boolean|string}
     */
    getMark(coords) {
        return this.markMap[coords.y][coords.x];
    }

}

export {Maze};