class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }

    console.log('deleteNode',value, root.value);
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }

      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }


  // go to the left first node first. read the left node value and than come 
  // back to root node read its value and then go to right node to read its value.
  // This is Depth First Search traversal
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log('inOrder', root.value);
      this.inOrder(root.right);
    }
  }

  // read the root node value first and then traverse to the left node 
  // and read its value and then traverse to the right node and read its value.
  // This is Depth First Search traversal
  preOrder(root) {
    if (root) {
      console.log('preOrder', root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  // read the left node value first and then read the 
  // root node value and then read the right node value.
  // This is Depth First Search traversal
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log('postOrder', root.value);
    }
  }

  // read the node on each level. We would start at the root node. add root node to queue
  // then dequeue the root node and read its value.
  // After this add left child to queue and the right child to queue, as queue isn't empty while loop would continue.
  // This is Breadth First Search traversal
  levelOrder() {
    /** Use the optimised queue enqueue and dequeue from queue-object.js instead.
     * I've used an array for simplicity. */
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log('levelOrder', curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  height(node) {
    if (!node) {
      return 0;
    } else {
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  printLevel(node, level) {
    if (!node) {
      return;
    }
    if (level === 1) {
      console.log('printLevel', `${node.value} `);
    } else if (level > 1) {
      this.printLevel(node.left, level - 1);
      this.printLevel(node.right, level - 1);
    }
  }

  isBST(node, min, max) {
    if (!node) {
      return true;
    }
    if (node.value < min || node.value > max) {
      return false;
    }
    return (
      this.isBST(node.left, min, node.value) &&
      this.isBST(node.right, node.value, max)
    );
  }
}

// TODO level order and delete

const bst = new BinarySearchTree();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);
bst.insert(2);
// bst.delete(5);
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 7));
bst.inOrder(bst.root);
bst.preOrder(bst.root);
bst.postOrder(bst.root);
bst.levelOrder(bst.root);
bst.printLevel(bst.root, 3);
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
console.log(bst.height(bst.root));
