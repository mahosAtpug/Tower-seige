const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1, block2, block3, block4, block5, block6, block7, block8, ground1;
var block9, block10, block11, block12, block13, block14, block15, block16, block17;
var slingShot, circle1, ground, block19, block20, block21, block22, block23, block24, block18, block25;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  //level one
  block1 = new Block(300,275,30,40); 
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8= new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //level one
  block17 = new Block(630,150,30,40);
  block18 = new Block(660,150,30,40);
  block19 = new Block(690,150,30,40);
  block20 = new Block(720,150,30,40);
  block21 = new Block(750,150,30,40);

  //level two
  block22 = new Block(660,110,30,40);
  block23 = new Block(690,110,30,40);
  block24 = new Block(720,110,30,40);

  //top
  block25 = new Block(690,70,30,40);


  circle1 = new Circle(130,200,30);
  slingShot = new SlingShot(circle1.body,{x:130,y:200});
  ground = new Ground(390,300,240,10);
  ground1 = new Ground(690,175,180,10); 

}

function draw() {
  background(200);  
  Engine.update(engine);

  fill("purple");
  rectMode(CENTER);
  rect(ground.body.position.x,ground.body.position.y,240,10);
 
  fill("purple");
  rectMode(CENTER);
  rect(ground1.body.position.x,ground1.body.position.y,180,10);

  //ground1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  circle1.display();
  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(circle1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

 function keyPressed(){
     if (keyCode===32){
        slingShot.attach(circle1.body);
     }
 }