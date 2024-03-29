// Amirfeqhi
// Inspired by Coding Train (Daniel Shiffman)
// https://github.com/shiffman/NOC-S17-2-Intelligence-Learning

let tree;
function setup() {
  noCanvas();
  tree = new Tree();
  for (let index = 0; index < 10; index++) {
    tree.addValue(floor(random(0, 100)));
  }
  tree.traverse();
  let result = tree.search(18);
  if (result == null) {
    console.log('not found');
  } else {
    console.log(result);
  }
}