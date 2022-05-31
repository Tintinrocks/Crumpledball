const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ballOptions = {
		isStatic : false
		,restitution : 0.3
		,airFriction : 0.3
	}
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,690,800,10);

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ballOptions);
	World.add(world, ball);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
  drawSprites();
 
}



