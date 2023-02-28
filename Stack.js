class Stack {
  constructor() {
    this.arr = [];
  }

  push(item) {
    this.arr.push(item);
  }

  pop() {
    return this.arr.pop();
  }

  print() {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      console.log(this.arr[i]);
      console.log("-----");
    }
  }
}

let stack = new Stack();
stack.push(6);
stack.push(8);
stack.push(9);
stack.push(10);
stack.push(90);

stack.print();
console.log("*****");

stack.pop();
stack.pop();

stack.print();
