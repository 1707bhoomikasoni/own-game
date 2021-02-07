class Box{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
    this.body=Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.body)
    this.sprite=createSprite(x,y,w,h)
    this.sprite.shapeColor="brown"
    }
    display(){
        this.body.position.x=this.sprite.x;
        this.body.position.y=this.sprite.y;
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,100,100)
    }
}