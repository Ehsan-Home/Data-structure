class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function addNode(root, value) {
  if (value >= root.value) {
    if (!root.right) {
      root.right = new Node(value);
      return;
    }
    addNode(root.right, value);
  } else {
    if (!root.left) {
      root.left = new Node(value);
      return;
    }
    addNode(root.left, value);
  }
}

function BFS(root) {
  let queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let node = queue.shift();
    console.log(node.value);

    if (node.right) {
      queue.push(node.right);
    }
    if (node.left) {
      queue.push(node.left);
    }
  }
}

function DFSInOrder(root) {
  if (!root) {
    return;
  }

  DFSInOrder(root.left);
  console.log(root.value);
  DFSInOrder(root.right);
}

function DFSPreOrder(root) {
  if (!root) {
    return;
  }
  console.log(root.value);
  DFSPreOrder(root.left);
  DFSPreOrder(root.right);
}

function DFSPostOrder(root) {
  if (!root) {
    return;
  }
  DFSPostOrder(root.left);
  DFSPostOrder(root.right);
  console.log(root.value);
}

function hasValue(root, value) {
  if (!root) {
    return false;
  }

  if (root.value === value) {
    return true;
  } else if (value > root.value) {
    return hasValue(root.right, value);
  } else {
    return hasValue(root.left, value);
  }
}

function getHeight(root) {
  if (!root) {
    return -1;
  }

  return Math.max(1 + getHeight(root.right), 1 + getHeight(root.left));
}

function isBinarySearchTree(root) {
  if (!root) {
    return true;
  }

  if (root.right) {
    if (root.value > root.right.value) {
      return false;
    }
  }
  if (root.left) {
    if (root.value < root.left.value) {
      return false;
    }
  }

  return isBinarySearchTree(root.left) && isBinarySearchTree(root.right);
}

let root = new Node(5);
addNode(root, 7);
addNode(root, 3);
addNode(root, 9);
addNode(root, 6);
addNode(root, 4);
addNode(root, 1);
addNode(root, 90);

let root2 = new Node(5);
root2.left = new Node(2);
root2.right = new Node(8);
root2.left.right = new Node(10);
root2.right.right = new Node(20);

console.log(isBinarySearchTree(root2));
