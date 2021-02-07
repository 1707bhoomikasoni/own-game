class Lives{
    constructor(x,y){
        this.image=loadImage("images/lives.png")
        this.sprite=createSprite(x,y)
        this.sprite.addImage(this.image)
        this.sprite.scale=0.3
    }
}