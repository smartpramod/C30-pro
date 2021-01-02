const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, ball;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var box16,box17,box18,box19,box20,box21;

function setup() {
  createCanvas(1300, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(750, 375, 1500, 50);
  box1 = new Box(400, 230, 50, 50);
  box2 = new Box(450, 230, 50, 50);
  box3 = new Box(500, 230, 50, 50);
  box4 = new Box(550, 230, 50, 50);
  box5 = new Box(600, 230, 50, 50);
  box6 = new Box(425, 180, 50, 50);
  box7 = new Box(475, 180, 50, 50);
  box8 = new Box(525, 180, 50, 50);
  box9 = new Box(575, 180, 50, 50);
  box10 = new Box(450, 130, 50, 50);
  box11 = new Box(500, 130, 50, 50);
  box12 = new Box(550, 130, 50, 50);
  box13 = new Box(475, 80, 50, 50);
  box14 = new Box(525, 80, 50, 50);
  box15 = new Box(500, 30, 50, 50);
  box16 = new Box(845, 150, 50, 50);
  box17 = new Box(895, 150, 50, 50);
  box18 = new Box(945, 150, 50, 50);
  box19 = new Box(870, 100, 50, 50);
  box20 = new Box(920, 100, 50, 50);
  box21= new Box(895, 50, 50, 50);
  ball = new Polygon(100, 100, 30);
  stand1 = new Ground(500, 270, 300, 20);
  stand2 = new Ground(900, 200, 300, 20);
  sling = new Sling(ball.body, { x: 130, y: 200 })
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  box1.display("#39ff14", "pink");
  box2.display("#39ff14", "pink");
  box3.display("#39ff14", "pink");
  box4.display("#39ff14", "pink");
  box5.display("#39ff14", "pink");
  box6.display("#39ff14", "pink");
  box7.display("#39ff14", "pink");
  box8.display("#39ff14", "pink");
  box9.display("#39ff14", "pink");
  box10.display("#39ff14", "pink");
  box11.display("#39ff14", "pink");
  box12.display("#39ff14", "pink");
  box13.display("#39ff14", "pink");
  box14.display("#39ff14", "pink");
  box15.display("#39ff14", "pink");
  box16.display("#39ff14", "pink");
  box17.display("#39ff14", "pink");
  box18.display("#39ff14", "pink");
  box19.display("#39ff14", "pink");
  box20.display("#39ff14", "pink");
  box21.display("#39ff14", "pink");
  sling.display("limegreen");
  stand1.display();
  stand2.display();
  ball.display("red", "yellow");
  textSize(35);
  fill(0);
  text("DRAG AND RELEASE THE BALL TO DESTROY THE BOXES", 150, 385)
  fill("orange");
  textSize(20);
  text("PRESS SPACE FOR A SECOND CHANCE !!",20,20)
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(ball.body);
  }
}