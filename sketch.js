const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var obstacle,obstacleIMG,obstacleGroup;

var engine, world;
var back1;
var form,play;
var green,greenGroup,blue,blueGroup,orange,orangeGroup,red,redGroup,violet,violetGroup,white,whiteGroup,yellow,yellowGroup;
var ground,grIMG;
var rod,rodIMG;
var slingShot;
var cannon,cannonImg;
function preload(){
  back1 = loadImage("images/back.jpeg");
 // green = loadImage("images/greenBall.png");
  grIMG = loadImage("images/soil.png");
  rodIMG = loadImage("images/player.png");
  green = loadImage("images/green.png");
  blue = loadImage("images/blue.png");
  orange = loadImage("images/orange.png");
  red = loadImage("images/red.png");
  violet = loadImage("images/violet.png");
  white = loadImage("images/white.png");
  yellow = loadImage("images/yellow.png");
  cannonImg = loadImage("images/cannon.png");

}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(displayWidth - 20, displayHeight-30);

  
  
  ground = createSprite(760,200,100,10);
  ground.scale = 3.1;
  ground.addImage(grIMG);
  
  cannon = createSprite(500,600,10,10);
  cannon.addImage(cannonImg);
  cannon.scale = 0.7;

  //rod = Bodies.circle(100,100,20);
 // World.add(world,rod);
 // slingShot = new Thread(this.rod,{x:500,y:400});

  greenGroup = new Group();
  blueGroup = new Group();
  orangeGroup = new Group();
  redGroup = new Group();
  violetGroup = new Group();
  whiteGroup = new Group();
  yellowGroup = new Group();


}

function draw() {

  background(back1);  
  
  Engine.update(engine);
  
  createEdgeSprites();

  cannon.x = mouseX;

 
  //fill("gold");
  //imageMode(CENTER)
 // image(rodIMG ,rod.position.x,rod.position.y,200,200);
  //slingShot.display();

  ground.display();
   cannon.display();
 

  greenGroup.setLifetimeEach(-1);
  blueGroup.setLifetimeEach(-1);
  orangeGroup.setLifetimeEach(-1);
  redGroup.setLifetimeEach(-1);
  violetGroup.setLifetimeEach(-1);
  whiteGroup.setLifetimeEach(-1);
  yellowGroup.setLifetimeEach(-1);

  lightyellow();
  lightGreen();
  lightblue();
  lightorange();
  lightred();
  lightviolet();
  lightwhite();
  lightyellow();

  if(keyDown("space")) {
    var rod = createRod();
    rod.addImage(rodIMG);
    rod.y = cannon.y;
    rod.x = cannon.x;
    rod.depth = cannon.depth;
    cannon.depth = cannon.depth + 1;
    if(greenGroup.isTouching(rod)){
      greenGroup.destroyEach();
      }
  }
  
 drawSprites();

 
}

//function mouseDragged(){
  //Matter.Body.setPosition(this.rod,{x:mouseX,y:mouseY});
//}

//function mouseReleased(){
 // slingShot.fly();
//}

//function keyPressed(){
 // if(keyCode===32){
   // Matter.Body.setPosition(this.rod,{x:500,y:400})

   // slingShot.attach(this.rod);
//}

//}

function lightGreen(){
  if(frameCount % 100 === 0){
    var gr = createSprite(200,-1000,10,10);
    gr.addImage(green);
    gr.scale = 0.5;
    gr.velocityY = 10;
    gr.lifetime = 100;
    gr.debug = false;
   // gr.setCollider("circle",0,2,70);
   
    greenGroup.add(gr);
  }

}

function lightblue(){
  if(frameCount % 500 === 0){
    var bl = createSprite(500,-1000,10,10);
    bl.addImage(blue);
    bl.scale = 0.5;
    bl.velocityY= 10;
    bl.lifetime = 100;
    bl.debug = false;
    //bl.setCollider("circle",0,2,70);

    blueGroup.add(bl);
  }

}

function lightorange(){
  if(frameCount % 700 === 0){
    var or = createSprite(1000,-1000,10,10);
    or.addImage(orange);
    or.scale = 0.5;
    or.velocityY = 10;
    or.lifetime = 100;
    or.debug = false;
    //or.setCollider("circle",0,2,70);

    orangeGroup.add(or);
  }

}

function lightred(){
  if(frameCount % 900 === 0){
    var re = createSprite(1300,-100,10,10);
    re.addImage(red);
    re.scale = 0.5;
    re.velocityY = 10;
    re.lifetime = 100;
    re.debug = false;
    re.setCollider("circle",0,2,70);

    redGroup.add(re);
  }

}

function lightviolet(){
  if(frameCount % 600 === 0){
    var vio = createSprite(650,-1000,10,10);
    vio.addImage(violet);
    vio.scale = 0.5;
    vio.velocityY = 10;
    vio.lifetime = 100;
    vio.debug = false;
   // vio.setCollider("circle",0,2,70);

    violetGroup.add(vio);
  }

}

function lightwhite(){
  if(frameCount % 300 === 0){
    var wh = createSprite(390,-1000,10,10);
    wh.addImage(white);
    wh.scale = 0.4;
    wh.velocityY = 10;
    wh.lifetime = 100;
    wh.debug = false;
   // gr.setCollider("circle",0,2,70);

    whiteGroup.add(wh);
  }

}

function lightyellow(){
  if(frameCount % 1000 === 0){
    var yel = createSprite(850,-1000,10,10);
    yel.addImage(yellow);
    yel.scale = 0.5;
    yel.velocityY = 10;
    yel.lifetime = 100;
    yel.debug = false;
  //  gr.setCollider("circle",0,2,70);

    yellowGroup.add(yel);
  }

}

function createRod() {
  rod= createSprite(100,100, 5,10);
  rod.velocityY = -6;
  rod.scale = 0.2;
  
  return rod;
  
}