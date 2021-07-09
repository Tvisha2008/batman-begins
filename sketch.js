const Engine = Matter.Engine;
const Body = Matter.Body;

var ground;
var manImg;
var maxDrops = 100;
var thunder1, thunder2, thunder3, thunder4;
var umbrella;

function preload(){
 manImg = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png"
,"walking_5.png","walking_6.png","walking_7.png","walking_8.png");
  thunder1 = loadImage("1.png");
  thunder2 = loadImage("2.png");
  thunder3 = loadImage("3.png");
  thunder4 = loadImage("4.png");
}

function setup(){
  var canvas = createCanvas(300,500);

  engine = Engine.create();
  world  = engine.world;

  
  umbrella = new Umbrella();

}

function draw(){
  background(0);
  Engine.update(engine);

  var rand = Math.round(random(1,2));
  if(frameCount%80===0){
    thunderCreatedFrame = frameCount;
   thunder = createSprite(random(10,370),random(10,30),10,10);
   switch(rand){
     case 1 : thunder.addImage(thunder1);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     case 3 : thunder.addImage(thunder3);
     break;
     default : break;
   }
   thunder.scale=rnadom(0.3,0.6)
   console.log(thunderCreatedFrame);
  }
  
  if(thunderCreatedFrame + 20 === frameCount && thunder){
    thunder.destroy();
 }

  umbrella.display();
  
  for(var i=0; i<maxDrops;i++){
    drops.push(new createDrop(random(0,400),random(0,400)));                                                                                                                                                                                                                          
  }

  
  drawSprites();
}