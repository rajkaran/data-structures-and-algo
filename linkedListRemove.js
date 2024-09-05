// Remove node from Doubly linked list

// {
//   prev: <node>
//   next: <node>
//   val: <number>
// }

function remove(head, valToRemove) {
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

function make() {
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

console.log(make());
console.log(remove(make(), 0));
console.log(remove(make(), 1));
console.log(remove(make(), 2));
