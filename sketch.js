var backgroundimg

var cat,rat
function preload() {
    //load the images here

    backgroundimg= loadImage("images/garden.png")
    catimg1=loadAnimation("images/tomOne.png")
    catimg2=loadAnimation("images/tomThree.png","images/tomTwo.png")
    catimg3=loadAnimation("images/tomFour.png")

    ratimg1=loadAnimation("images/jerryOne.png")
    ratimg2=loadAnimation("images/jerryThree.png","images/jerryTwo.png")
    ratimg3=loadAnimation("images/jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat= createSprite(900,650,50,50)
    cat.addAnimation("first",catimg1)
    cat.scale=0.17

    rat=createSprite(400,650,50,50)
    rat.addAnimation("firstr",ratimg1)
    rat.scale=0.1
}

function draw() {

    background(backgroundimg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-rat.x < cat.width/2 - rat.width/2)
{
    cat.velocityX=0;

    cat.addAnimation("last",catimg3)
    cat.changeAnimation("last")

    rat.addAnimation("lastr",ratimg3)
    rat.changeAnimation("lastr")

    
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
cat.velocityX=-3;

cat.addAnimation("run",catimg2)
cat.changeAnimation("run")
rat.addAnimation("tease",ratimg2)
rat.changeAnimation("tease")

}
