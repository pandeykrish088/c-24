const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var box2;
var pig2;
var log1;
var box3;
var box4;
var box5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    pig1 = new Pig(810,350);
    pig2 = new Pig(245,270);
    box1 = new Box(200,300,70,70);
    box2 = new Box(240,100,70,70);
    log1 = new Log(810,260,300,PI/2);
    box3 = new Box(700,320,70,70);
    box4 = new Box(920,320,70,70);
    box5 = new Box(100,320,70,70);
    ground = new Ground(600,height,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig2.display();
log1.display();
box3.display();
box4.display();
box5.display();
}