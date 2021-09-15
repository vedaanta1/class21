

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var topwall;
var leftwall;
var rightwall;
var bottomwall; 
var ball;
var b1;
var b2;


let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  ball_options = {
    restitution: 0.01
    
  }
  

  ball = Bodies.circle(200, 100, 20, ball_options);

  World.add(world, ball);


  topwall = new Ground(200, 10, 400, 20);
  leftwall = new Ground(10, 200, 20, 400);
  rightwall = new Ground(390, 200, 20, 400);
  bottomwall = new Ground(200, 390, 400, 20);


  b1 = createImg("up.png")
  b1.position(100, 30)
  b1.size(50, 50)
  b1.mouseClicked(up_force)

  b2 = createImg("right.png")
  b2.position(150, 30)
  b2.size(50, 50)
  b2.mouseClicked(right_force)

  rectMode(CENTER);
  ellipseMode(RADIUS);


  
}

function draw() 
{
  background(51);

  topwall.display();
  leftwall.display();
  rightwall.display();
  bottomwall.display();

  ellipse(ball.position.x, ball.position.y, 20)

  Engine.update(engine);
}


function up_force(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:0.01});
}

function right_force(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.01, y:0});
}

