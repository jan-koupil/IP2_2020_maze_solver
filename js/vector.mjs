class Vector {

    x;
    y;

    /**
     *
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Clones the vector coordinates
     * @returns {Vector} 
     */
    clone() {
        return new Vector(this.x, this.y);
    }

    /**
     * Tests if the other vectors has same coordinates
     * @param {Vector} otherVector
     * @returns {boolean} 
     */
    equals(otherVector) {
        return this.x === otherVector.x && this.y === otherVector.y;
    }

    /**
     * Vector addition
     * @param {Vector} otherVector
     * @returns {Vector}
     */
    add(otherVector) {
        return new Vector(this.x + otherVector.x, this.y + otherVector.y);
    }

    /**
     * Calculates distance of the other vector from this vector
     * @param {Vector} otherVector
     * @returns {number}
     */
    distFrom(otherVector) {
        // pythagorean distance
        return Math.sqrt(Math.pow(this.x - otherVector.x, 2) + Math.pow(this.y - otherVector.y, 2));

        // cartesian distance - sum of coordinate differences
        // return Math.abs(this.x - otherVector.x) + Math.abs(this.y - otherVector.y);

        // lower coordinate distance
        // return Math.max(Math.abs(this.x - otherVector.x), Math.abs(this.y - otherVector.y));
    }

    /**
     *
     * @returns {string}
     */
    toString(){
        return `[${this.x}, ${this.y}]`;
    }
}

export {Vector};