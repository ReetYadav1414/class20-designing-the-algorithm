function setup() {
  createCanvas(800,400);
  

  box1=createSprite(200, 200, 100, 50); box2=createSprite(300, 100, 50, 100); box1.shapeColor='green'; box2.shapeColor='green';
}

function draw() {
  background(255,255,255);  
  box2.x=mouseX; box2.y=mouseY;
  
 if ( box1.width/2+box2.width/2>box1.x-box2.x &&box1.width/2+box2.width/2>box2.x-box1.x&& box1.height/2+box2.height/2>box1.y-box2.y && box1.height/2+box2.height/2>box2.y-box1.y)
 {
   box1.shapeColor="red"
   box2.shapeColor="red"
 }
 else{ box1.shapeColor="green"
 box2.shapeColor="green"

 }
    drawSprites();
}