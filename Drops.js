class Drop
{
    constructor()
    {
        var options=
        {
            friction:2
        }
        this.body=Bodies.circle(0,0,5,options);
        this.trajectory=[];
        World.add(world,this.body);
    }
    display()
    {
        fill("blue");
            for(var i=0;i<50;i++)
            {
                xco=random(0,250);
                yco=random(0,400);
                ellipse(xco,yco,5,5); 
            }
        if(this.body.position.y>height)
        {
            Matter.Body.setPosition(this.body,{x:random(0,250),y:random(0,400)});
        }
    }
}
//this.body.position.x,this.body.position.y