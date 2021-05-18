var car;
var wall;
var speed;
var weight;
var bull;
var thickrest;

function setup() {
createCanvas(1600,400);
wall=createSprite(1200,200,thickrest,height/2);
car=createSprite(50, 200, 50, 50)
speed=random(223,321);
weight=random(30,52);
thickrest=random(22,83)

car.velocityX=speed;
}

function draw() {
background(0,0,0);  
if(wall.x-car.x < (car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5 * speed* speed/22500;
if(deformation<180  )
{
car.shapeColor=color(255,0,0);
}
if (deformation<180 && deformation>100) 
{
car.shapeColor=color(230,230,0,0)

}
if(deformation<100)
{
car.shapeColor=color(0,255,0)
}
}





drawSprites();
}

