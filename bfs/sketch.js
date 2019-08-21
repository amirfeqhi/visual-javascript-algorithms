// Amirfeqhi

let graph;
let root;
function setup() {
  noCanvas();
  graph = new Graph();
  root = new Node(floor(random(0, 10)));
  graph.addNode(root);
  for (let i = 0; i < 10; i++) {
    let node = new Node(floor(random(0, 10)));
    root.addAdjacent(node);
    graph.addNode(node);
  }
}