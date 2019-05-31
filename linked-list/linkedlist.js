// Inspired by: js-algorithm github
// Shubhangi Raj Agrawal medium

let cx = 20;

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtBeginning(data) {
    let newNode = new Node(data);
    newNode.next = this.head;

    this.head = newNode;
    return this.head;
  }
  insertAtEnd(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }
    let tail = this.head;
    while (tail.next != null) {
      tail = tail.next;
    }
    tail.next = newNode;
    return newNode;
  }
  findP(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter == index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }
  insertAtPosition(data, index) {
    if (index == 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let pre = this.findP(index - 1);
    let newNode = new Node(data);
    newNode.next = pre.next;
    pre.next = newNode;

    return this.head;
  }
  deleteFromFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    return this.head;
  }
  deleteFromLast() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let pre = this.head;
    let tail = this.head.next;
    while (tail.next != null) {
      pre = tail;
      tail = tail.next;
    }
    pre.next = null;
    return this.head;
  }
  deleteFromPosition(index) {
    if (index == 0) {
      this.head = this.head.next;
      return;
    }

    let pre = this.findP(index - 1);
    if (!pre || !pre.next) {
      return;
    }
    pre.next = pre.next.next;
    return this.head;
  }
  deleteList() {
    this.head = null;
  }
  show(data) {
    noFill();
    stroke(255);
    circle(cx, 200, 35);
    fill(255);
    textSize(15);
    text(data, cx, 200);
    line(cx, 200, cx+60, 200);
    cx += 60;
  }
}