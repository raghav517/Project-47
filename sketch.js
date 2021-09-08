var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImage = loadImage("assets/R.gif")
  zombie1Image = loadImage("assets/zombie.png")
  zombie2Image = loadImage("assets/d8rb0ke-e4f79e7a-5a15-4b36-be64-046fb76149a4.png")
  
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  
zombieGroup = createGroup();
zombie1Group = createGroup();
zombie2Group = createGroup();


//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0);




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
spawnZombie2();
spawnZombie1();
spawnZombie();
drawSprites();

}




/*function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(width+20,height-300,40,10);
    cloud.y = Math.round(random(100,220));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 300;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth+1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}*/

function spawnZombie(){

  if (frameCount % 200 === 0)
  {
    var zombie = createSprite(width+20,height,40,10);
    zombie.y = Math.round(random(100,600));
    zombie.addImage(zombieImage);
    zombie.velocityX = -3;
    zombie.scale = 0.2;
    zombie.lifetime = 300
    zombieGroup.add(zombie);


  }



}

function spawnZombie1(){

  if (frameCount % 450 === 0)
  {
    var zombie1 = createSprite(width+20,height,40,10);
    zombie1.y = Math.round(random(100,600));
    zombie1.addImage(zombie1Image);
    zombie1.velocityX = -3;
    zombie1.scale = 0.2;
    zombie1.lifetime = 300
    zombie1Group.add(zombie1);


  }



}

function spawnZombie2(){

  if (frameCount % 750 === 0)
  {
    var zombie2 = createSprite(width+20,height,40,10);
    zombie2.y = Math.round(random(100,600));
    zombie2.addImage(zombie2Image);
    zombie2.velocityX = -3;
    zombie2.scale = 0.4;
    zombie2.lifetime = 300
    zombie2Group.add(zombie2);


  }



}