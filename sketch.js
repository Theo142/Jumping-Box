var canvas;
var music;
var greenS;
var orangeS;
var pinkS;
var blueS;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    greenS = createSprite(50,500,200,10)
    greenS.shapeColor = "Green"

    orangeS = createSprite(260,500,200,10)
    orangeS.shapeColor = "Orange"
    
    pinkS = createSprite(470,500,200,10)
    pinkS.shapeColor = "Pink" 

    blueS = createSprite(680,500,200,10)
    blueS.shapeColor = "Blue"

    //create box sprite and give velocity
    box = createSprite(20,20,20,20)
    box.shapeColor = "Yellow"
    box.velocityX = 15
    box.velocityY = 20

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    edges = createEdgeSprites()
    box.bounceOff(edges)


    //add condition to check if box touching surface and make it box
    if(box.isTouching(greenS)&&box.bounceOff(greenS))
    {
        box.shapeColor = "green"
        music.play()
        console.log("hello")
    }

    if(box.isTouching(orangeS))
    {
        box.velocityX = 0
        box.velocityY = 0
        box.shapeColor = "orange"
        music.stop()
    }

    if(box.isTouching(pinkS)&&box.bounceOff(pinkS))
    {
        box.shapeColor = "pink"
    }

    if(box.isTouching(blueS)&&box.bounceOff(blueS))
    {
        box.shapeColor = "blue"
    }


    drawSprites()
}
