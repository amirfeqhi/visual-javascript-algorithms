class Tree {
  constructor() {
    this.root = null;
  }

  addValue(value) {
    let node = new Node(value);
    if (this.root == null) {
      this.root = node;
    } else {
      this.root.addNode(node);
    }
  }
  traverse() {
    this.root.visit();
  }
  search(value) {
    let found = this.root.search(value);
    return found;
  }
}