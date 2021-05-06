
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground1 = new Ground(400,600,800,20)
 dustbin1 = new Dustbin(750,80,200,20)
 
 paper1 = new Paper(250,400,40)

 var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  });

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  drawSprites();
  ground1.display()
  dustbin1.display();
  
  paper1.display()

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}



