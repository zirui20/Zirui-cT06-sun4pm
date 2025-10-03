let displayText;
let inputText;

function setup() {
    createCanvas(600,400);

    displayText = "hello world";
    displayText1 = "Enter your age:";

    inputText = createInput();
    inputText.position(220, height - 100);
    inputText.input(updateText);
}

function draw(){
    background('lightblue');
    fill("black");
    textSize(24);
    textAlign(CENTER,CENTER);

    text(displayText, width/2 ,height/2);
    text(displayText1, 180/2,500/2)
}

function updateText() {
    displayText = this.value();
}