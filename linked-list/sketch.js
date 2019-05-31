let l1
let x = 50;
let y = 50;

function setup() {
  createCanvas(600, 400);
  l1 = new LinkedList();
  for (let i = 0; i <= 10; i++) {
    l1.insertAtBeginning(i);
  }
}

function draw() {
  background(0, 0, 0);
  l1.show(30, height/2);
}
