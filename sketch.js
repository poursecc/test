var spr;

function setup() {
  createCanvas(400,400);
  spr = createSprite (200, 200, 20, 20);
}

function draw() 
{
  background(30);
if (keyDown("right")){
spr.x += 2;
}

if (keyDown("left")){
  spr.x += -2;
}

if (keyDown("up")){
spr.y += -2;
}

if (keyDown("down")){
  spr.y += 2;
}

  drawSprites();

}




