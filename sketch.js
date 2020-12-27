const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,box1,box2,ground;
function setup() {
  createCanvas(1200,900);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(600,890,1200);
  box1=new Box(800,850,70,70);
  box2=new Box(835,600,70,90);
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
}