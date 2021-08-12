
function preload(){
  //pre-load images
  var path
path.addImage(path.png);

var runner
runner=createSprite(20,20)
runner.addImage("runner-1.png","runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
var path
path=createSprite(200,200)
path.velocityY = 4;
path.scale = 1.2;


}

function draw() {
  background(0);

if(path.y > 400){
  path.y = height/2;
}



  drawSprites();
}
