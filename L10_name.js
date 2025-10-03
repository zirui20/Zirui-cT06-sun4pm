let displayText;

function setup() {
    createCanvas(600,400);

    displayText = "hello world";
}

function draw(){
    background('lightblue');

    text(displayText, wdith/2,height/2);
}