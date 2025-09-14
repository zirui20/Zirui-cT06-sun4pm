let img;
let soundEffect;
let imgWidth = 50;
let imgHeight = 50;
let speed = 1;
let x = 200;
let y = 200;


function preload() {
    img = loadImage('assets/pico-a.png');
    soundEffect = loadSound('assets/pop.mp3');
}

function setup() {
    createCanvas(400,400);
}

function draw() {
    background('lightblue');

    x = constrain(x, 0, width-imgWidth);

    if(keyIsDown(RIGHT_ARROW)) {
        x +=speed;``
    }
    if(keyIsDown(LEFT_ARROW)) {
        x -=speed;
    }

    image(img, 200, 200, imgWidth, imgHeight);

}

function keyPressed() {
    if(keyCode == 32) {
        imgWidth = 50;
        soundEffect.play();    
    }
}

function keyReleased() {
    imgWidth =100;
}