var ship, shipImg;
var sea,seaImg;
function preload(){
seaImg=loadImage("sea.png");
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,100,100);
  sea.addImage(seaImg);
  sea.velocityX=-2;

  ship=createSprite(200,300);
  ship.addAnimation("ship",shipImg);
  ship.scale=0.2
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=width/2;
  }
 drawSprites();
}