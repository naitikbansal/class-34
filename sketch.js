const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var ground1, ball;
var rope;
var box1,box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
function setup(){
    createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
   ground1=new Ground(1500,600,3000,20);
    
    
    box1=new Box(925,255,70,70);
    box2 = new Box(850, 255, 70, 70);
    box3 = new Box(775, 255, 70, 70);
    box4 = new Box(700, 255, 70, 70);
    box5 = new Box(925, 330, 70, 70);
    box6 = new Box(925, 405, 70, 70);
    box7 = new Box(925, 480, 70, 70);
    box8 = new Box(925, 555, 70, 70);
    box9 = new Box(850, 330, 70, 70);
    box10 = new Box(850, 405, 70, 70);
    box11 = new Box(850, 480, 70, 70);
    box12 = new Box(850, 555, 70, 70);
    box13 = new Box(775, 330, 70, 70);
    box14 = new Box(775, 405, 70, 70);
    box15 = new Box(775, 480, 70, 70);
    box16 = new Box(775, 555, 70, 70);
    box17 = new Box(700, 330, 70, 70);
    box18 = new Box(700, 405, 70, 70);
    box19 = new Box(700, 480, 70, 70);
    box20 = new Box(700, 555, 70, 70);

    ball=new Ball(200,200,80);
    rope = new Chain(ball.body,{x:500,y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  
  ball.display();
  rope.display();
}