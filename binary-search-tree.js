"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    let current = this;

    if (current.val === val) return current;

    if (current.val > val) {
      if (current.left) {
        return current.left.findRecursively(val);
      }
    } else {
      if (current.right) {
        return current.right.findRecursively(val);
      }
    }

  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {

    let newNode = new Node(val);
    // root becomes new node -> return
    let current = this;
    if (current === null) {
      current = newNode;
      return current;
    }
    // if current value is greater than value
    if (current.val > val) {
      if (current.left) {
        return current.left.insertRecursively(val);
      } else {
        current.left = newNode;
        return current.left;
      }
    } else {
      if (current.right) {
        return current.right.insertRecursively(val);
      } else {
        current.right = newNode;
        return current.right;
      }
    }

  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {
    let nodeValues = [];

    if (this.val === null) return;
    nodeValues.push(this.val);
    if(this.left) {
      nodeValues.push(...this.left.dfsPreOrder());
    }
    if(this.right) {
      nodeValues.push(...this.right.dfsPreOrder());
    }

    return nodeValues;
  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {
    let nodeValues = [];

    if (this.val === null) return;

    if(this.left) {
      nodeValues.push(...this.left.dfsInOrder());
    }

    nodeValues.push(this.val);

    if(this.right) {
      nodeValues.push(...this.right.dfsInOrder());
    }

    return nodeValues;
  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    // create new node with Node class constructor, pass in val
    // set current to this
    // do while loop that ends if current is null
    // check if current.val is greater than val, go to the left, else left
    // set current to right or left do the comparison to val again
    // check if current right or left is null?


    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (current) {
      if (current.val > val) {
        if (current.left === null) {
          current.left = newNode;
          return;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        } else {
          current = current.right;
        }
      }
    }

  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    return this.root.insertRecursively(val);
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) {
        return current;
      }
      current = current.val > val ? current.left : current.right;
    }
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    if (this.root === null) return [];

    return this.root.dfsPreOrder();
  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    if (this.root === null) return [];

    return this.root.dfsInOrder();
  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {

  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
