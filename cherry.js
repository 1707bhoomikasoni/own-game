class Cherry{
    constructor(x,y){
        this.image=loadImage("images/cherry.png")
this.sprite=createSprite(x,y)
this.sprite.scale=0.3
this.sprite.addImage(this.image)
cherryGroup.add(this.sprite)
    }
}