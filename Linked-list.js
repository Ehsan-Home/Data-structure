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
push(head, 3);
push(head, 2);
push(head, 12);
push(head, 44);

head = pop(head);
head = pop(head);

Print(head);
