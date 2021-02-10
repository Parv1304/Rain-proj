const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var xco,yco;

var thunder1,thunder2;

function preload()
{  
    thunder1=loadImage("Thunder1.png"); 
    thunder2=loadImage("Thunder2.png");
}

function setup()
{
    var canvas = createCanvas(250,500);
    engine = Engine.create();
    world = engine.world;

    drop1=new Drop();

    man=new Umbrella(100,400,100,200);
}

function draw()
{
    background(0);
    Engine.update(engine);
    drop1.display();
    man.display();

    var rand=Math.round(random(1,4));
    if(frameCount%80===0)
    {
        thunderCreatedFrame=frameCount;
        thunder=createSprite(random(10,200),random(50,70),10,10);
        switch(rand)
        {
            case 1:thunder.addImage(thunder1);
                   thunder.scale=0.5;
                   break;
            case 2:thunder.addImage(thunder2);
                   thunder.shapeColor=rgb(0,0,0);
                   break;
            default:break;
        }
        //thunder.scale=random(0.3,0.6);
    }
    if(frameCount%92===0)
    {
        thunder.destroy();
    }
    console.log(frameCount);
    drawSprites();
}   

