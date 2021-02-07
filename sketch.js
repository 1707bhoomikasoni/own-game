var bird,box1,box2,box3,bo4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22,box23,box24,box25;
var box26,box27,box28,box29,box30,box31,box32,box33,box34,box35;
var box36,box37,box38,box39,box40,box41,box42,box43,box44,box45;
var box46,box47,box48,box49,box50,box51,box52;
var crow1,crow2,crow3,crow4,crow5,crow6;
var cherry1,cherry2,cherry3,cherry4,cherry6,cherry7,cherry8;
var cherry9,cherry10,cherry11,cherry12,cherry13,cherry14,cherry15;
var cherry16,cherry17,cherry18,cherry19,cherry20,cherry21,cherry22;
var cherry23,cherry24,cherr25,cherry26,cherry27,cherry28,cherry29,cherry30;
var cherry31,cherry32,cherry33,cherry34,cherry35,cherry36,cherry37,cherry38,cherry39,cherry40;
var cherry41,cherry42,cherry43,cherry44,cherry45,cherry46,cherry47,cherry48,cherry49,cherry50;
var cherry51,cherry52,cherry53,cherry54,cherry55,cherry56,cherry57,cherry58;
var bg
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20;
var cherryGroup,mangoGroup;
const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;


function preload(){
bg=loadImage("images/back.jpg")
}

function setup() {
  engine=Engine.create()
  world=engine.world;
  createCanvas(windowWidth,windowHeight);
  cherryGroup=createGroup()
  mangoGroup=createGroup()

 bird=new Bird()

 box1=new Box(130,20,250,20)
 box2=new Box(110,120,200,20)
 box3=new Box(360,25,20,150)
 box4=new Box(20,300,20,150)
 box5=new Box(150,250,60,60)
 box6=new Box(290,290,20,170)
 box7=new Box(150,370,80,20)
 box8=new Box(150,540,20,150)
 box9=new Box(110,730,200,20)
 box10=new Box(20,570,20,150)
 box11=new Box(370,490,200,20)
 box12=new Box(330,670,20,150)
 box13=new Box(500,220,200,20)
 box14=new Box(400,350,20,90)
 box15=new Box(460,25,20,190)
 box16=new Box(550,120,200,20)
 box17=new Box(470,740,300,20)
 box18=new Box(480,555,20,150)
 box19=new Box(490,400,200,20)
 box20=new Box(490,300,200,20)
 box21=new Box(550,620,20,250)
 box22=new Box(650,25,20,210)
 box23=new Box(790,300,200,20)
 box24=new Box(760,640,200,20)
 box25=new Box(670,550,20,160)
 box26=new Box(870,560,20,180)
 box27=new Box(770,530,20,230)
 box28=new Box(750,100,20,200)
 box29=new Box(800,200,200,20)
 box30=new Box(950,100,200,20)
 box31=new Box(1000,100,20,200)
 box32=new Box(990,400,20,200)
 box33=new Box(800,740,200,20)
 box34=new Box(990,300,200,20)
 box35=new Box(1070,600,200,20)
 box36=new Box(1000,740,20,90)
 box37=new Box(1190,400,200,20)
 box38=new Box(1100,500,20,50)
 box39=new Box(1200,200,200,20)
 box40=new Box(1190,300,20,50)
 box41=new Box(1200,700,200,20)
 box42=new Box(1270,550,20,100)
 box43=new Box(1150,50,20,120)
 box44=new Box(1270,200,20,200)
 box45=new Box(1380,650,20,200)
 box46=new Box(1480,450,20,200)
 box47=new Box(1370,470,40,20)
 box48=new Box(1550,650,200,20)
 box49=new Box(1370,300,20,150)
 box50=new Box(1550,250,200,20)
 box51=new Box(1500,60,20,200)
 box52=new Box(1480,100,200,20)

 crow1=new Crow(711,357)
 crow1.sprite.velocityX=-5
 crow2=new Crow(130,320)
 crow2.sprite.velocityX=-5
 crow3=new Crow(843,48)
 crow3.sprite.velocityX=-5
 crow4=new Crow(408,690)
 crow4.sprite.velocityY=-5
crow5=new Crow(1200,648)
crow5.sprite.velocityY=-5
crow6=new Crow(1296,47)
 crow6.sprite.velocityX=-5

 cherry1=new Cherry(300,155)
 cherry2=new Cherry(635,230)
 cherry3=new Cherry(340,355)
 cherry4=new Cherry(645,415)
 cherry6=new Cherry(65,210)
 cherry7=new Cherry(120,405)
 cherry8=new Cherry(220,525)
 cherry9=new Cherry(450,190)
 cherry10=new Cherry(125,660)
 cherry11=new Cherry(25,475)
 cherry12=new Cherry(400,565)
 cherry13=new Cherry(395,460)
 cherry14=new Cherry(220,330)
 cherry15=new Cherry(155,155)
 cherry16=new Cherry(275,645)
 cherry17=new Cherry(70,545)
 cherry18=new Cherry(405,105)
 cherry19=new Cherry(475,355)
 cherry20=new Cherry(600,565)
 cherry21=new Cherry(580,160)
 cherry22=new Cherry(680,335)
 cherry23=new Cherry(500,670)
 cherry24=new Cherry(640,670)
 cherry25=new Cherry(690,45)
 cherry26=new Cherry(800,55)
 cherry27=new Cherry(880,150)
 cherry28=new Cherry(845,260)
 cherry29=new Cherry(800,365)
 cherry30=new Cherry(915,345)
 cherry31=new Cherry(700,445)
 cherry32=new Cherry(810,550)
 cherry33=new Cherry(920,455)
 cherry34=new Cherry(940,560)
 cherry35=new Cherry(980,235)
 cherry36=new Cherry(1060,51)
 cherry37=new Cherry(1120,165)
 cherry38=new Cherry(1125,360)
 cherry39=new Cherry(1115,260)
 cherry40=new Cherry(1020,440)
 cherry41=new Cherry(760,700)
 cherry42=new Cherry(915,660)
 cherry43=new Cherry(1045,715)
 cherry44=new Cherry(1175,470)
 cherry45=new Cherry(1095,555)
 cherry46=new Cherry(1185,645)
 cherry47=new Cherry(1280,30)
 cherry48=new Cherry(1320,720)
 cherry49=new Cherry(1320,567)
 cherry50=new Cherry(1270,330)
 cherry51=new Cherry(1320,435)
 cherry52=new Cherry(1440,690)
 cherry53=new Cherry(1450,70)
 cherry54=new Cherry(1270,330)
 cherry55=new Cherry(1320,160)
 cherry56=new Cherry(1440,245)
 cherry57=new Cherry(1455,480)
 cherry58=new Cherry(1470,610)


 m2=new Mango(70,345)
 m6=new Mango(370,700)
 m7=new Mango(400,20)
 m8=new Mango(630,380)
  m10=new Mango(680,140)
  m12=new Mango(935,50)
  m18=new Mango(1410,45)
 m19=new Mango(1160,515)
 m20=new Mango(815,605)
 m21=new Mango(1010,225)
 m22=new Mango(1440,210)


 Engine.run(engine);
}

function draw() {
  
  
  background(bg); 
  bird.display()
  drawSprites()
  textSize(18)
  fill("black")
  text(mouseX+","+mouseY,mouseX,mouseY)

  for(var i=0;i<cherryGroup.length;i++){
    if(bird.sprite.isTouching(cherryGroup[i])){
      cherryGroup[i].destroy()
     }
  }

  for(var i=0;i<mangoGroup.length;i++){
    if(bird.sprite.isTouching(mangoGroup[i])){
      mangoGroup[i].destroy()
     }
  }

 
  
  crow1.sprite.bounceOff(box14.sprite)
  crow1.sprite.bounceOff(box32.sprite)
  crow2.sprite.bounceOff(box4.sprite)
  crow2.sprite.bounceOff(box6.sprite)
  crow3.sprite.bounceOff(box28.sprite)
  crow3.sprite.bounceOff(box31.sprite)
  crow5.sprite.bounceOff(box41.sprite)
  crow5.sprite.bounceOff(box37.sprite)
  crow4.sprite.bounceOff(box11.sprite)
  crow4.sprite.bounceOff(box17.sprite)
  crow6.sprite.bounceOff(box43.sprite)
  crow6.sprite.bounceOff(box51.sprite)
}

function keyPressed(){
  if(keyCode===39){
   bird.sprite.x+=15
  }

  if(keyCode===37){
    bird.sprite.x-=15
    bird.sprite.changeAnimation("flip",bird.animation2)
  }

  if(keyCode===40){
    bird.sprite.y+=15
  }

  if(keyCode===38){
    bird.sprite.y-=15
  }
}