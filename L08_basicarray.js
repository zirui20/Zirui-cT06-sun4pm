let x = 200-20;
let y = 200-20
let speedX = 5;
let shapeColor = 'blue'

function setup() {
    createCanvas(400,400)
}

function draw() {
    background(220);

    if(x <= 0 || x >= width - size) {
        speedX *= -1;
        shapeColor = color(random(225), random(225), random(225));
    }

    x +=

}

























