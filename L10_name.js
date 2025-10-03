let displayText;
let inputText;


function setup() {
    createCanvas(600,400);

    displayText = "your name";
    displayText1 = "enter your name:";
    displayText2 = "enter your age:"

    inputText = createInput();
    inputText.position(220, height - 150);


    inputText.input(updateText);
}

function draw(){
    background('lightblue');
    fill("black");
    textSize(24);
    textAlign(CENTER,CENTER);

    text(displayText, width/2 ,200/2);

}

function draw() {
    textSize(20);
     text(displayText1, 230/2,520/2);
     text(displayText2, 230/2,600/2);
}

function updateText() {
    displayText = this.value();
}