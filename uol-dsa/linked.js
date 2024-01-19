function LLNode(data) {
  this.data = data;
  this.next = null;
}

// generate linked lists
let head = new LLNode(4);
head.next = new LLNode(6);
head.next.next = new LLNode(8);
head.next.next.next = new LLNode(10);
console.log(head);
console.log(head.data);
console.log(head.next);

// searching linked lists
function searchLL(head, item) {
  let temp = head;
  while (temp !== null) {
    if (temp.data === item) {
      return true;
    }
    temp = temp.next;
  }
  return false;
}

function numberLL(head, item) {
  let count = 0;
  let temp = head;
  while (temp !== null) {
    if (temp.data === item) {
      count += 1;
    }
    temp = temp.next;
  }
  return count;
}
