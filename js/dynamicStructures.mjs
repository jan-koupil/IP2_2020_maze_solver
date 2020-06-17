class Queue {

    queue;

    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        return this.queue.shift();
    }

    count() {
        return this.queue.length;
    }

}

class Stack {

    stack;

    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        return this.stack.pop()
    }

    count() {
        return this.stack.length;
    }
}

class SortList {

    list;
    propName;

    /**
     *
     * @param {string} propName The property used for sorting
     */
    constructor(propName) {
        this.list = [];
        this.propName = propName;
    }

    /**
     * Puts the item into its place according to sorting property
     * @param item
     */
    put(item) {
        for (let i = 0; i < this.count(); i++) {
            if (item[this.propName] <= this.list[i][this.propName]) {
                this.list.splice(i, 0, item);
                return;
            }
        }

        this.list.push(item);
    }

    /**
     *
     * @returns {any} item with lowest property value
     */
    get() {
        return this.list.shift();
    }

    count() {
        return this.list.length;
    }

}

export {Queue, Stack, SortList};
