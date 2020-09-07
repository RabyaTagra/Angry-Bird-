const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box3,box4, box5;
var bird;
var pig1,pig2;
var log1, log2, log3, log4;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,550,100,100);
    box2 = new Box(900,550,100,100);
    box3 = new Box(700, 450, 100, 100);
    box4 = new Box(900, 450, 100, 100); 
    box5 = new Box(800, 350, 100, 100);  

    ground = new Ground(600,height,1200,20);

    bird = new Bird(100, 300);

    pig1 = new Pig(800,550);
   pig2 = new Pig(800, 450);

    log1 = new Log(800,500,350,PI/2);
log2 = new Log(800,400, 350, PI/2);
log3 = new Log(750,350, 150, PI/7);
log4 = new Log(850,350, 150, -PI/7);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    bird.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display(); 
    log3.display(); 
    log4.display(); 

    ground.display();
}