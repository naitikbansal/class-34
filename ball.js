class Ball{
    constructor(x,y,r){
        var opt={
            friction:0.1,
            density:1.2,
            isStatic:false
        }
        this.r=r;
        this.ball=Bodies.circle(x,y,r,opt);
        World.add(world,this.ball);
    }
    display(){
   var pos=this.ball.position
   fill("red");
   ellipse(pos.x,pos.y,this.r,this.r);
    }
}