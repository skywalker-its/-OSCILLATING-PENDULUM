const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var log,ellipse,string;

function preload() {
 
}

function setup() {
  // srcWidth = window.innerWidth;
  // srcHeight = window.innerHeight;
  createCanvas(1300,600);

  engine = Engine.create();
  world = engine.world;

  log = new Log(550,180,300,30);
  ball = new Ball(550,400,30)
  string = new String(ball.body,{x:550,y:180});
}

function draw() {
  Engine.update(engine);
  background("pink")
  log.display();
  ball.display();
  string.display();

  textSize(40);
  
  text("Press SPACE to oscillate the pendulum left and right", 100, 40);
  text("Press ENTER to stop the pendulum from oscillating", 200, 95);
  
  if(keyCode === 32){
    ball.move();
   }

}

 function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


function keyPressed() {
  if(keyCode === 32){
   //ball.move();
  }

 }