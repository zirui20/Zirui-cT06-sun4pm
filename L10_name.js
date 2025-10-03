let displayText;

function setup() {
    createCanvas(600,400);

    displayText = "hello world";
}

function draw(){
    background('lightblue');
    fill("black");
    textSize(24);
    textAllign(CENTER,CENTER)
    text(displayText, 30/2 ,height/2);
}