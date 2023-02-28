class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(item) {
    this.arr.push(item);
  }

  dequeue() {
    return this.arr.shift();
  }

  peek() {
    return this.arr[0];
  }

  print() {
    console.log(this.arr.join(" | "));
  }
}

let queue = new Queue();
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(2);
queue.enqueue(-10);
queue.enqueue(90);

queue.dequeue();
queue.dequeue();

queue.print();
