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
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
      var count = 0;
      var currentNode = this._head;
      while ( count < index ) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode.data;
    }

    insertAt(index, data) {
      var count = 0;
      var currentNode = this._head;
      while (currentNode) {
        if ( count === index) {
          currentNode.data = data;
        }
          currentNode = currentNode.next;
          count++;
      }
      return this;
    }

    isEmpty() {
      if ( this.length === 0) {
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

    deleteAt(index) {}

    reverse() {
      var node_head = this._head;
      var node_tail = this._tail;
      var i = 0;
      var temp;
      while ( i < Math.floor( this.length / 2)) {
        temp = node_tail.data;
        node_tail.data = node_head.data;
        node_head.data = temp;
        node_head = node_head.next;
        node_tail = node_tail.prev;
        i++;
      }
      return this;
    }

    indexOf(data) {
      var node = this._head;
      for ( var i = 0; i < this.length; i++) {
        if (node.data === data) {
          return i;
        }
        node = node.next;
      }
      return -1;
    }
}

module.exports = LinkedList;
