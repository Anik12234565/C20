//Its a special veriable which can't be updated!
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  //It creates the physics engine!
  engine = Engine.create();
  //It adds the engine to the world!
  world = engine.world;
  
  //It's the physics properties forthe ball!
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  //It keeps the ground static! (note:it can either be "True" or "False")
   var ground_options ={
     isStatic: true
   };
  
   var rock_options = {
     restitution: 0.125,
     frictionAir: 0.03
   }
   //Ceating physics engine for ground!
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  //Adding ground to the physics world!
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(250,15,22,rock_options);
  World.add(world,rock);

  wall = Bodies.rectangle(300,100,200,15,ground_options);
  World.add(world,wall);  
  //This means the values of X,Y position provided are the positions of center point of rectangle!
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  //Creating bodies for ground & ball!
  fill("cyan");
  ellipse(ball.position.x,ball.position.y,20);
  fill("lightgreen");
  rect(ground.position.x,ground.position.y,400,20);
  fill("lightgray");
  ellipse(rock.position.x,rock.position.y,27);
  fill("red");
  rect(wall.position.x,wall.position.y,200,15);
 
}

