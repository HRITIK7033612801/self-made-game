class   Striker{
    constructor(x, y) {
        var options = {
        isStatic:true
        }
        this.body = Bodies.rectangle(x, y,90,70,  options);
       this.width = 120;
       this.height= 70;
        this.image = loadImage("striker.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}