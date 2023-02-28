class Queue {
  constructor() {
    this.arr = [];
  }

  push(item) {
    this.arr.push(item);
  }

  shift() {
    return this.arr.shift();
  }

  print() {
    console.log(this.arr.join(" | "));
  }
}

let queue = new Queue();
queue.push(3);
queue.push(4);
queue.push(2);
queue.push(-10);
queue.push(90);

queue.shift();
queue.shift();

queue.print();
