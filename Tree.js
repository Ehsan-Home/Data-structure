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

function DFSPreOrder(root) {
  if (!root) {
    return;
  }

  DFSPreOrder(root.left);
  console.log(root.value);
  DFSPreOrder(root.right);
}

let root = new Node(5);
addNode(root, 7);
addNode(root, 3);
addNode(root, 9);
addNode(root, 6);
addNode(root, 4);
addNode(root, 1);

DFSPreOrder(root);
