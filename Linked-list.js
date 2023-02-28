class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function addNode(head, value) {
  let temp = head;

  while (temp.next) {
    temp = temp.next;
  }

  temp.next = new node(value);
}

function print(head) {
  let temp = head;

  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}

const head = new node(4);
addNode(head, 5);
addNode(head, 3);
addNode(head, 2);
addNode(head, 12);

print(print(head));
