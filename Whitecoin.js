class Whitecoin{
    constructor(x, y) {
        var options = {
        isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 42.5, 42.5,  options);
        this.width = 42.5;
        this.height = 42.5;
        this.image = loadImage("whitecoin.png");
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