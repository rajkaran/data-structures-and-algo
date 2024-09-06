// Remove node from Doubly linked list

// {
//   prev: <node>
//   next: <node>
//   val: <number>
// }

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value}<->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }

  printReverse() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.tail;
      let list = "";
      while (curr) {
        list += `${curr.value}<->`;
        curr = curr.prev;
      }
      console.log(list);
    }
  }
}

const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print();
list.printReverse();
list.removeFromEnd();
list.print();
list.removeFromFront();
list.print();

class DoublyLinkedListInterview{
  constructor() {
  }
  
  removeOriginal(head, valToRemove) {
    let currentNode = head;
    let prevNode = head.prev;

    while (currentNode !== null) {
      // console.log('currentNode', currentNode.val)
      // console.log('currentNode.val === valToRemove', currentNode.val, valToRemove, currentNode.val === valToRemove)

      if (currentNode.val === valToRemove) {
        if (currentNode === head) {
          currentNode.next.prev = null;
          head = currentNode.next;
        } else {
          prevNode.next = currentNode.next;
          if (currentNode.next !== null) {
            currentNode.next.prev = prevNode;
          }
        }
      }

      currentNode = currentNode.next;
      if (currentNode !== null) {
        prevNode = currentNode.prev;
      }
    }

    return head;
  }

  remove(head, valToRemove) {
    let currentNode = head;
    let prevNode = head.prev;

    if(currentNode.val === valToRemove) {
      currentNode.next.prev = null;
      head = currentNode.next;
    }
    else{
      while(currentNode.next !== null && currentNode.val !== valToRemove) {
        currentNode = currentNode.next;
        prevNode = currentNode.prev;
      }

      if(currentNode.next !== null){
        prevNode.next = currentNode.next;
        currentNode.next.prev = prevNode;
      }
      else if(currentNode.val === valToRemove){
        prevNode.next = null;
      }
    }

    return head;
  }

  make() {
    let n0 = { val: 0 };
    let n1 = { val: 1 };
    let n2 = { val: 2 };

    n0.prev = null;
    n0.next = n1;

    n1.prev = n0;
    n1.next = n2;

    n2.prev = n1;
    n2.next = null;

    return n0;
  }
}

const ilist = new DoublyLinkedListInterview();
console.log(ilist.make());
console.log(ilist.remove(ilist.make(), 0));
console.log(ilist.remove(ilist.make(), 1));
console.log(ilist.remove(ilist.make(), 2));
