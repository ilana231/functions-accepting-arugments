var fixedRect, movingRect, object1, object2;

function setup() {
  createCanvas(1200,800);
  object1 = createSprite(600, 100, 50, 80);
  object1.shapeColor = "green";
  object1.debug = true;
  object2 = createSprite(600, 800,80,30);
  object2.shapeColor = "green";
  object2.debug = true;

  object2.velocityY = -5;
  object1.velocityY = +5;

  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  


  bounceOff(movingRect,fixedRect);
  bounceOff(object1,object2)
  drawSprites();
}

