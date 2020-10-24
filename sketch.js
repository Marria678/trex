var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage, clouds, cloudsImage, ob, ob1, ob2, ob3, ob4, ob5, ob6, score;

var obstacleGroup, cloudGroup;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  cloudsImage = loadImage("cloud.png")
  
  ob1 = loadImage("obstacle1.png")
  
  ob2 = loadImage("obstacle2.png")
  
  ob3 = loadImage("obstacle3.png")
  
  ob4 = loadImage("obstacle4.png")
  
  ob5 = loadImage("obstacle5.png")
  
  ob6 = loadImage("obstacle6.png")
  
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  obstacleGroup = new Group();
  
  cloudGroup = new Group();
  
  score = 0;
}

function draw() {
  background(180);
  score = score+Math.round(getFrameRate()/60)
  text("score: "+score,500,50)
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  spawnObstacles();
  
  spawnClouds();
  
  drawSprites();
  
}

function spawnClouds() {
  if(frameCount%60===0){
  clouds = createSprite(600,120,40,10)
  clouds.velocityX=-3;
  clouds.addImage(cloudsImage)
  clouds.scale=0.5;
  clouds.y=random(80,120)
  clouds.lifetime=200;
  clouds.depth=trex.depth-1   
  cloudGroup.add(clouds)
    
}
  
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    //obstacle.addAnimation("obstacle" + rand);
    switch(rand) {
        
      case 1: obstacle.addImage(ob1);
        break;
      case 2: obstacle.addImage(ob2);
        break;
      case 3: obstacle.addImage(ob3);
        break;
      case 4: obstacle.addImage(ob4);
        break;
      case 5: obstacle.addImage(ob5);
        break;
      case 6: obstacle.addImage(ob6);
        break;
        default: break;
        
    }
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle)
  }
  
}