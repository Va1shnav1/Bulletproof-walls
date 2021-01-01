var bullet, bSpeed, bWeight;
var wall, thickness;
var deformation;
function setup() {
  createCanvas(1600,400);
  bSpeed=random(223,321);
  bWeight=random(30, 52);
  thickness=random(22, 83)
  damage=(0.5*bWeight*bSpeed*bSpeed)/(thickness*thickness*thickness);
  bullet=createSprite(50, 200, 40, 10);
  bullet.shapeColor="white";
  //bullet.debug=true;
  bullet.velocityX=random(10, 18);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80, 80, 80);
  //wall.debug=true;
}
function draw() {
  background(0, 0, 0);  
  if(bullet.isTouching(wall)&& damage<10){
    background(53, 94, 59);
    stroke("black");
    strokeWeight(5);
    wall.shapeColor="green";
    bullet.velocityX=0;
    fill(76, 187, 23);
    textSize(50);
    text("Effective", 800, 50);
  } else if(bullet.isTouching(wall)&& damage>=10){
    background(102, 0, 0);
    stroke("black");
    strokeWeight(5);
    wall.shapeColor="red";
    wall.height=height/4;
    wall.y=bullet.y-(wall.y/2);
    wall.setCollider("rectangle", 0, 0, thickness, height/1.4);
    var wall2= createSprite(1200, (200+wall.height) , thickness, height/4);
    wall2.shapeColor="red";
    bullet.velocityX=0;
    fill(226, 61, 40);
    textSize(50);
    text("Ineffective", 800, 50);
  }
  drawSprites();
}