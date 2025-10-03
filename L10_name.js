let displayText;
let inputText;

function setup() {
    createCanvas(600,400);

    displayText = "hello world";

    inputText = createInput();
    inputText.position(224, height - 100);
}

function draw(){
    background('lightblue');
    fill("black");
    textSize(24);
    textAlign(CENTER,CENTER);

    text(displayText, width/2 ,height/2);
}