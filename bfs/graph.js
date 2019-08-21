class Graph {
  constructor() {
    this.nodes = [];
    this.graph = {};
    this.queue = [];
  }
  // Add a node to graph
  addNode(n) {
    this.nodes.push(n);
    this.graph[n.val] = n;
  }
  visit() {
    // Pick a random item for start visiting
    let picked = Math.floor(Math.random(0, this.nodes.length));
    this.queue.push(this.nodes[picked]);
  }
  // Explore each node adjacent
  explore() {
    for (let i = 0; i < this.queue.length; i++) {
      if (!this.queue[i].visited) {
        this.queue[i].visited = true;
        for (let j = 0; j < this.queue[i].edges.length; j++) {
          this.queue.push(this.queue[i].edges[j]);
        }
      } else {
        continue;
      }
    }
  }
}