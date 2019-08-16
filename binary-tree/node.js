class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addNode(n) {
    if (n.value < this.value) {
      if (this.left == null) {
        this.left = n;
      } else {
        this.left.addNode(n);
      }
    } else if (n.value > this.value) {
      if (this.right == null) {
        this.right = n;
      } else {
        this.right.addNode(n);
      }
    }
  }
  visit() {
    if (this.left != null) {
      this.left.visit();
    }
    console.log(this.value);
    if (this.right != null) {
      this.right.visit();
    }
  }
  search(value) {
    if (this.value == value) {
      return this;
    } else if (value < this.value && this.left != null) {
      return this.left.search(value);
    } else if (value > this.value && this.right != null) {
      return this.right.search(value);
    }
    return null;
  }
}