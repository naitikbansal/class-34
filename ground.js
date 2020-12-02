class Ground{
    constructor(x,y,w,h){
        var opt={
            isStatic:true
        }
        this.w=w;
        this.h=h;
        this.ground=Bodies.rectangle(x,y,w,h,opt);
        World.add(world,this.ground);
    }
    display(){
   var pos=this.ground.position
   fill("brown");
   rectMode(CENTER);
   rect(pos.x,pos.y,this.w,this.h);
    }
}