
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;






function preload() {
    boardImg = loadImage("board.png")
  
}

function setup(){
    var canvas = createCanvas(800,800);

    engine = Engine.create();
    world = engine.world;
   
    redCoin = new Coin(404.5,401);

    bcoin1 =new Blackcoin(402,360);
    bcoin2 =new Blackcoin(364,414);
    bcoin3 =new Blackcoin(433,416)
    bcoin4 =new Blackcoin(358,450)
    bcoin5 =new Blackcoin(330,391)
    bcoin6 =new Blackcoin(368,334)
    bcoin7 =new Blackcoin(438,337)
    bcoin8 =new Blackcoin(470,401)
    bcoin9 =new Blackcoin(430,455)


    wcoin1 =new Whitecoin(367,379)
    wcoin2 =new Whitecoin(395,434)
    wcoin3 =new Whitecoin(433,382)
    wcoin4 =new Whitecoin(339,357)
    wcoin5 =new Whitecoin(395,467)
    wcoin6 =new Whitecoin(464,367)
    wcoin7 =new Whitecoin(330,428)
    wcoin8 =new Whitecoin(403,326)
    wcoin9 =new Whitecoin(465,440)

striker = new Striker(390,660)

shooter = new Shooter(striker.body,{x:390, y:670});

}

function draw(){
    background(boardImg);

    Engine.update(engine);


 redCoin.display()
  bcoin1.display();
  bcoin2.display();
 bcoin3.display();
 wcoin1.display()
 wcoin2.display()
 wcoin3.display()
 wcoin4.display()
 wcoin5.display()
 wcoin6.display()
 bcoin4.display()
 bcoin5.display()
 wcoin7.display();
 bcoin6.display();
 bcoin7.display()
 wcoin8.display();
 bcoin8.display()
 bcoin9.display()
 wcoin9.display()
 striker.display()
 shooter.display();

 collision(striker, bcoin1);
 collision(striker, bcoin2);
 collision(striker, bcoin3);
 collision(striker, bcoin4);
 collision(striker, bcoin5);
 collision(striker, bcoin6);
 collision(striker, bcoin7);
 collision(striker, bcoin8);
 collision(striker, bcoin9);

 collision(striker, wcoin1);
 collision(striker, wcoin2);
 collision(striker, wcoin3);
 collision(striker, wcoin4);
 collision(striker, wcoin5);
 collision(striker, wcoin6);
 collision(striker, wcoin7);
 collision(striker, wcoin8);
 collision(striker, wcoin9);
 
 collision(striker, redCoin);
}


function mouseDragged(){
    Matter.Body.setPosition(striker.body, {x:mouseX, y :mouseY})
}

function mouseReleased(){
    shooter.fly();
}

function collision(lstriker,lbcoin){

strikerBodyPosition = lstriker.body.position;
bcoinBodyPosition = lbcoin.body.position;


var distance = dist (strikerBodyPosition.x,strikerBodyPosition.y,bcoinBodyPosition.x,bcoinBodyPosition.y )
if (distance <= lbcoin.width + lstriker.width){
    Matter.Body.setStatic (lbcoin.body, false)
}


}