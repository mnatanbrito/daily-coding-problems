import test from 'ava';

/**
 * This problem was asked by Google.
 * An XOR linked list is a more memory efficient doubly linked list.
 * Instead of each node holding next and prev fields, it holds a field named both, which
 * is an XOR of the next node and the previous node.
 * Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node
 * at index. If using a language that has no pointers (such as Python), you can assume you have
 * access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  add(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    newNode.prev = this.tail;

    this.tail = newNode;
    this.length++;
  }

  get(index) {
    if (index > this.length) return undefined;

    let currentNode = this.head;
    let currentIndex = 1;

    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex += 1;
    }

    return currentNode;
  }
}

test('Does the XOR linked list works correctly?', t => {
  const ll = new LinkedList(2);
  ll.add(12);
  ll.add(8);
  ll.add(5);
  ll.add(6);

  t.is(ll.length, 5);
  t.is(ll.get(1).value, 2);
  t.is(ll.get(2).value, 12);
  t.is(ll.get(3).value, 8);
  t.is(ll.get(4).value, 5);
  t.is(ll.get(5).value, 6);
  t.is(ll.get(8), undefined);
});
