class Shooter{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.shooter = Constraint.create(options);
        World.add(world, this.shooter);
    }
    attach(body){
        this.shooter.bodyA = body;
    }
    
    fly(){
        this.shooter.bodyA = null;
    }

    display(){
     
        if(this.shooter.bodyA){
            var pointA = this.shooter.bodyA.position;
            var pointB = this.pointB;
            push();
            
           
            
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x +10, pointB.y);
              
               
            
            pop();
        }
    }
    
}