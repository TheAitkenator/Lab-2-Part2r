

//let x = 200;

function setup(){
  createCanvas (400, 400);
  }

function draw(){
  background(255);
  x--;
  square(x, 10, 100);
}

let x = 5;
let y = 5;

function setup(){
  createCanvas (400, 400);
}

function draw(){
  background(255)
  x++;
  y++;
  ellipse(x, y, 5, 6,);
}

let r1 = 200;
let r2 = 8 + 1;
function draw(){
  //r1++;
  r2++;
  rect(20, 200, r1, r2,);
}
