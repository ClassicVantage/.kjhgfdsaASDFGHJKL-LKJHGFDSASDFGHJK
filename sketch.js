// You could have multiple flags like: start, launch to indicate the state of the game.

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;






function setup() {
var canvas=createCanvas(400,400);
engine=Engine.create()
world=engine.world
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
//ground=new Ground(600,10,1200,20)
tank=new Tanker(200,200,50)
}

function draw() {
    background(0)
   Engine.update(engine)
   //ground.display();
   tank.display()
// Remember to update the Matter Engine and set the background.
}


//function keyReleased() {
    // Call the shoot method for the cannon.
//}