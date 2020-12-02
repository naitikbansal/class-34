class Box{
    constructor(x,y,w,h){
        var opt={
        'restitution':0.8,
        'friction':1.0,
        'density':0.04,
        isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,opt);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }
    display(){
   var pos=this.body.position;
   var angle=this.body.angle;
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   rectMode(CENTER);
   strokeWeight(4);
   stroke("green");
   fill(255);
   
   rect(0,0,this.w,this.h);
   pop();
    }
}