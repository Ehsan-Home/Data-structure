class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function push(head, value) {
  if (!head) {
    head = new node(value);
    return head;
  }
  let temp = head;

  while (temp.next) {
    temp = temp.next;
  }

  temp.next = new node(value);
  return head;
}

function unshift(head, value) {
  let temp = new node(value);
  temp.next = head;
  return temp;
}

// 2 -> 3 -> 5c -> 6nc -> null(nc)
// counter = 0
// index = 4, value = 7
function add(head, value, index) {
  let curr = head;
  let nextCurr = head.next;

  let counter = 0;
  while (counter < index - 1) {
    if (!curr) {
      return -1;
    }
    // if (!nextCurr) {
    //   break;
    // }
    counter++;
    curr = curr.next;
    nextCurr = nextCurr.next;
  }

  let newNode = new node(value);
  newNode.next = nextCurr;
  curr.next = newNode;

  return 1;
}

function pop(head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return null;
  }

  let curr = head;
  let next = head.next;

  while (next.next) {
    curr = curr.next;
    next = next.next;
  }

  curr.next = null;
  next = null;
  return head;
}

function Print(head) {
  let temp = head;

  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}

// const head = new node(4);
// push(head, 5);
// push(head, 3);
// push(head, 2);
// push(head, 12);

// print(head);

let head = null;

head = push(head, 5);
head = unshift(head, 4);
head = unshift(head, 6);
head = unshift(head, 15);
head = unshift(head, 23);
head = unshift(head, 25);
// push(head, 3);
// push(head, 2);
// push(head, 12);
// push(head, 44);

// head = pop(head);
// head = pop(head);

Print(head);
