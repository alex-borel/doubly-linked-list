const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head !== null) {
            return this._head.data;
        } else {
            return null;
        }
    }

    tail() {
        if (this._tail !== null) {
            return this._tail.data;
        } else {
            return null;
        }
    }

    at(index) {
        var count = 0;
        var currentNode = this._head;
        while (count < index) {
            if (currentNode.next !== null) {
                currentNode = currentNode.next;
                count++;
            } else {
                throw console.error("Index out of range");
            }
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        var count = 0;
        var currentNode = this._head;
        while (currentNode) {
            if (count === index) {
                currentNode.data = data;
            }
            currentNode = currentNode.next;
            count++;
        }
        return this;
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        var counter = 0;
        var currentNode = this._head;
        while (currentNode) {
            if (counter === index) {
                if (currentNode.prev !== null) {
                    currentNode.prev.next = currentNode.next;
                }
                if (currentNode.next !== null) {
                    currentNode.next.prev = currentNode.prev;
                }
                this.length--;
                break;
            }
            currentNode = currentNode.next;
            counter++;
        }
        return this;
    }

    reverse() {
        var node = this._head;
        var temp = null;
        while (node !== null) {
            temp = node.prev;
            node.prev = node.next;
            node.next = temp;
            node = node.prev;
        }
        temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        return this;
    }

    indexOf(data) {
        var node = this._head;
        var count = 0;
        while (node) {
            if (node.data === data) {
                return count;
            }
            node = node.next;
            count++;
        }
        return -1;
    }
}

module.exports = LinkedList;
