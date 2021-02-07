class Crow{
    constructor(x,y){
        this.animation=loadAnimation("images/crow1.png","images/crow2.png","images/crow3.png","images/crow4.png","images/crow5.png","images/crow6.png","images/crow7.png","images/crow8.png",)
        this.sprite=createSprite(x,y)
        this.sprite.addAnimation("crow",this.animation)
    }
}