let l1
let d;
let t;

function setup() {
  createCanvas(900, 600);
  background(0, 0, 0);
  l1 = new LinkedList();
}

function draw() {
  noLoop();
  stroke(255);
  textSize(30);
  textAlign(CENTER);
  textStyle(BOLD);
  text('LinkedList', 450, 40);
}

function mousePressed() {
  d = floor(random(1, 50));
  t = l1.insertAtEnd(d);
  l1.show(t.data);
}
