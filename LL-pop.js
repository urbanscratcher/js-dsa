class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // O(n)
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      // make tail point to previous item
      // from head,
      let temp = this.head;
      let pre = this.head;

      // iterate them to current tail
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }

      // pop actually happens
      // make tail point to pre
      this.tail = pre;

      // make tail's next null
      this.tail.next = null;

      // reduce length
      this.length--;

      // when 1 item
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }

      console.log(`you popped`, temp);
      // return popped item
      return temp;
    }
  }

  // O(1)
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    console.log(`you pushed ${value}`);
    return this;
  }
}

let myLinkedList = new LinkedList(3);
myLinkedList.push(5);
myLinkedList.push(7);
myLinkedList.push(3);
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();
console.log(myLinkedList);
