let attempts = 0;
let hiddenWord = "";
let textBox;
let button;

function setup() {
    createCanvas(600,400);
    textBox = createInput();
    textBox.position(width/2 - textBox.width/2, 200);
}
function draw() {
    background(220);
    textAllign(CENTER);
    textSize(24);
    text("guess the word!", width/2, 50);
    text("attempts: " + attempts, width/2, 100);
    text("hints: " +  hiddenWord, width/2, 150);
}