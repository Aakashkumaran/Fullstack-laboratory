interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
  }
  class Stack<T> implements IStack<T> {
    private storage: T[] = [];
  
    constructor(private capacity: number = Infinity) {}
  
    push(item: T): void {
      if (this.size() === this.capacity) {
        throw Error("Stack has reached max capacity, you cannot add more items");
      }
      this.storage.push(item);
    }
  
    pop(): T | undefined {
      return this.storage.pop();
    }
  
    peek(): T | undefined {
      return this.storage[this.size() - 1];
    }
  
    size(): number {
      return this.storage.length;
    }
  }
  
  const stack = new Stack<number>(5);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
//   stack.push(6);
//   stack.push(7);
  console.log(stack.size()); 
  console.log(stack.peek()); 
  console.log(stack.size());
  console.log(stack.pop()); 
  console.log(stack.size()); 
  