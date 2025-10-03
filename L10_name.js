let displayName;
let displayAge;

let inputName;
let inputAge;


function setup() {
    createCanvas(600,400);

    // displayText = "your name";
    displayName = "enter your name:";
    displayAge = "enter your age:"

    inputName = createInput();
    inputName.position(220, height - 150);


    inputName.input(updateName);
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