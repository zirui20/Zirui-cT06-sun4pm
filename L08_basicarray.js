let img;
let soundEffect;
let imgWidth
let imgHeight


function preload() {
    img = loadImage('assets/pico-a.png');
    soundEffect = loadSound('assets/pop.mp3');
}

function setup() {
    createCanvas(400,400);
}

function draw() {
    background('lightblue');
    Image(img, 200, 200, imgWidth, imgHeight);
}