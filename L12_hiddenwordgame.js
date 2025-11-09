let attempts = 0;
let hiddenWord = "";
let textBox;
let button;
let disText = "";

function setup() {
    createCanvas(600,400);
    textBox = createInput();
    textBox.position(width/2 - textBox.width/2, 200);

    button = createButton('Guess');
    button.position(textBox.x + textBox.width - 30, 200);
    button.mousePressed(display);
}
function draw() {
    background(220);

    textAlign(CENTER);
    textSize(24);
    text("guess the word!", width/2, 70);
    text("attempts: " + attempts, width/2, 120);
    text("hints: " +  hiddenWord, width/2, 170);
    text(disText)
}

function display() {
    disText = textBox.value();
}