class Mango{
    constructor(x,y){
        this.image=loadImage("images/mango.png")
this.sprite=createSprite(x,y)
this.sprite.scale=0.4
this.sprite.addImage(this.image)
mangoGroup.add(this.sprite)
    }
}