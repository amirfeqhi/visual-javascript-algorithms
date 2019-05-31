let l1
let d;
let t;

function setup() {
  createCanvas(600, 400);
  background(0, 0, 0);
  l1 = new LinkedList();
}

function draw() {

}

function mousePressed() {
  d = floor(random(1, 50));
  t = l1.insertAtEnd(d);
  l1.show(t.data);
}
