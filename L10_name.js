let displayName;
let inputText;


function setup() {
    createCanvas(600,400);

    // displayText = "your name";
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
     background('lightblue');
    textSize(20);
     text(displayText1, 130/2,570/2);
     text(displayText2, 130/2,650/2);
}

function updateText() {
    displayText = this.value();
}