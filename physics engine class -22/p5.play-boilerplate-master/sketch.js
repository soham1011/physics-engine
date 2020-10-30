const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var object;
var ground;
var ball;
function setup() {
   

  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var re={
    restitution:1
  }
  ball=Bodies.circle(200,100,20,re);
  World.add(world,ball);
  var gr={
    isStatic:true
  }
ground=Bodies.rectangle(200,390,400,20,gr);
  World.add(world,ground)
  console.log(object)
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  
ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
}