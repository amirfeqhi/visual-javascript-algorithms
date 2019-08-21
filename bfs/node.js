class Node {
  constructor(val) {
    this.val = val;
    this.parent = null;
    this.edges = [];
    this.visited = false;
  }
  // Add adjacents for each node
  addAdjacent(n) {
    if (this.edges.length < 2) {
      this.edges.push(n);
      n.parent = this;
    } else {
      this.edges[Math.floor(Math.random(0, 2))].addAdjacent(n);
    }
  }
}