var tower,towerImage;
var door,doorImage,doorsGroup;
var climber,climberImage,climbersGroup;
var ghost,ghostImage;
var invisibleBlock,invisibleBlockGroup;
var gameState="play";

function preload(){
towerImage=loadImage("tower.png");
doorImage=loadImage("door.png");
climberImage=loadImage("climber.png");
ghostImage=loadImage("ghost-standing.png");
}

function setup(){
createCanvas(600,600);
tower=createSprite(300,300);
tower.addImage("tower",towerImage);
tower.velocityY=1;
 
ghost=createSprite(200,200,50,50);
ghost.addImage("ghost",ghostImage);
ghost.scale=0.4;
  
 doorsGroup=new Group();
 climbersGroup=new Group();
  invisibleBlockGroup=new Group();
  
  
}

function draw(){
background(0);
if(gameState==="play"){
if (keyDown("left_arrow")){
ghost.x=ghost.x-3;
}
if (keyDown("right_arrow")){
ghost.x=ghost.x+3;
}
if (keyDown("space")){
ghost.velocityY=-10;
}
ghost.velocityY=ghost.velocityY+0.8;
if(tower.y>400){
tower.y=300;
}
spawnDoor();
  if(climbersGroup.isTouching(ghost) || ghost.y>600){
    ghost.destroy();
    gameState="end";
  }
drawSprites();
}
if(gameState==="end"){
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("game over",230,230);
}
}  
function spawnDoor(){
if(frameCount%250===0){
var door=createSprite(200,-50);
var climber=createSprite(200,10);
  var invisibleBlock=createSprite(200,15);
  invisibleBlock.width=climber.width;
  invisibleBlock.height=2;
door.x=Math.round(random(120,400));
  climber.x=door.x;
  invisibleBlock.x=door.x;
  door.addImage(doorImage);
  climber.addImage(climberImage);
  door.velocityY=1;
  climber.velocityY=1;
  invisibleBlock.velocityY=1;
  ghost.depth=door.depth;
  ghost.depth=ghost.depth+1;
  door.lifeTime=600;
  climber.lifeTime=600;
invisibleBlock.lifeTime=600;
  invisibleBlock.debug=true;
  doorsGroup.add(door);
  climbersGroup.add(climber);
  invisibleBlockGroup.add(invisibleBlock);
  
}
}


















































