class Bird{
    constructor(){
       
    this.animation=loadAnimation("images/bird1.png","images/bird2.png","images/bird3.png","images/bird4.png","images/bird5.png","images/bird6.png","images/bird7.png","images/bird8.png","images/bird9.png")
    this.animation2=loadAnimation("images/fbird1.png","images/fbird2.png","images/fbird3.png","images/fbird4.png","images/fbird5.png","images/fbird6.png","images/fbird7.png","images/fbird8.png","images/fbird9.png")
    this.body=Bodies.rectangle(60,70,100,100)
    World.add(world,this.body)
    this.sprite=createSprite(60,70)
    this.sprite.scale=0.3;
    this.sprite.addAnimation("bird",this.animation)
    this.sprite.addAnimation("fbird",this.animation2)
    console.log(this.sprite.width)
 }
 display(){
     this.body.position.x=this.sprite.x;
     this.body.position.y=this.sprite.y;
     rectMode(CENTER)
     rect(this.body.position.x,this.body.position.y,100,100)
 }
}