let img;
let soundEffect;
let imgWidth = 50;
let imgHeight = 


function preload() {
    img = loadImage('assets/pico-a.png');
    soundEffect = loadSound('assets/pop.mp3');
}

function setup() {
    createCanvas(400,400);
}

function draw() {
    background('lightblue');
    image(img, 200, 200, imgWidth, imgHeight);
}