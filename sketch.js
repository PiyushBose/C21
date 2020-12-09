var obj1,obj2,obj3,obj4;
var moving,fixed;

function setup() {
  createCanvas(800,400);
  moving =  createSprite(100, 200, 50, 80);
  fixed =  createSprite(500, 200, 80, 50);

  obj1 = createSprite(100,50,50,50);
  obj2 = createSprite(200,50,50,50);
  obj3 = createSprite(300,50,50,50);
  obj4 = createSprite(400,50,50,50);

  obj1.shapeColor="pink";
  obj2.shapeColor="pink";
  obj3.shapeColor="pink";
  obj4.shapeColor="pink";

  moving.shapeColor = "red";
fixed.shapeColor = "green"

obj1.velocityX =3;
//fixed.velocityX = -3;

}

function draw() {
  background("lightblue");  

  moving.x =mouseX;
  moving.y = mouseY;

  console.log(fixed.x-moving.x)



if(isTouching(moving,obj1)||isTouching(moving,obj2)||isTouching(moving,obj3)||isTouching(moving,obj4)){

  moving.shapeColor="black";
}
else
{
  moving.shapeColor="red"
}

bounceOff(obj1,obj2)


  drawSprites();
}

