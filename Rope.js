class Rope{
    constructor(bodyA,bodyB,x,y)
    {
        this.x = x;
        this.y = y;
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            
            bodyB:{x:this.x,y:this.y}
           }
           this.Rope = Constraint.create(options);
    World.add(world,this.Rope);
    }
    display(){
        var pointA=this.Rope.bodyA.position;
        var pointB=this.Rope.bodyB.position;
        strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
}