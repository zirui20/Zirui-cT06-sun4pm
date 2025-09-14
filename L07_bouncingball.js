// task1


// let img; 
// let soundEffect;
// let music;
// let imgWidth = 100;
// let imgHeight = 100;
// let speed = 50;
// let x = 200;
// let y = 200;


// function preload() {
//     img = loadImage('assets/pico-a.png');
//     soundEffect = loadSound('assets/pop.mp3');
//     music = loadSound('assets/bossaNova.mp3');
// }

// function setup() {
//     createCanvas(400,400);
//     music.loop();
// }

// function draw() {
//     background('lightblue');

//     x = constrain(x, 0, width-imgWidth);
//     y = constrain(y, 0, height-imgHeight);

//     if(keyIsDown(RIGHT_ARROW)) {
//         x +=speed;
//     }
//     if(keyIsDown(LEFT_ARROW)) {
//         x -=speed;
//     }if(keyIsDown(UP_ARROW)) {
//         y -=speed;
//     }
//     if(keyIsDown(DOWN_ARROW)) {
//         y +=speed;
//     }
//     image(img, x, y, imgWidth, imgHeight); 

// }
// 2

// function keyPressed() {
//     if(keyCode == 32) {
//         imgWidth = 50;
//         soundEffect.play();    
//     }
//     if(key == 's') {
//         music.stop();
//     }
// }

// function keyReleased() {
//     imgWidth =100;
//     soundEffect.pressed();
// }





// task2

let x = 300;
let y = 200;
let size = 30;
let speedX = 5;
let speedY = 5;


function setup() {
    createCanvas(600,400);
    background(220);
}
function draw() {

    if (x-size/2 <= 0 ||x + size/2>= width) {
        speedX *= -1;
        shapeColor = color(random(255), random(255), random(255))
    }
    if (y-size/2 <= 0 ||y + size/2>= height) {
        speedY *= -1;
    }
    x += speedX;
    y += speedY;

    noStroke();
    circle(x, y, size)
}

