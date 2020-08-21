var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxSide1;
var boxBase;
var boxSide2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	boxSide1=createSprite(300,627,12,66);
	boxSide1.shapeColor=color("red");

	boxBase=createSprite(384,654,156,12);
	boxBase.shapeColor=color("red");

	boxSide2=createSprite(468,627,12,66);
	boxSide2.shapeColor=color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:false} );
	 World.add(world, ground);
	 
	//create box left side
	boxSide1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, boxSide1); 

	//create base for the box
	boxBase = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, boxBase); 
	 
	//create box right side
	boxSide2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, boxSide2); 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody,isStatic=false);


	
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



