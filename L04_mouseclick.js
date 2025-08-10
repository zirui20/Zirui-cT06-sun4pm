let shapeColor = "blue"
let size = 30;

function setup() {
    createCanvas(600,600);
    background(220);
}

function draw() {
    
    // fill(shapeColor);
    // circle(width/2,height/2,100);

}

// function mousePressed() {
//     shapeColor = color(random(255), random(255), random(255));
// }

// function mouseReleased() {
//     //shapeColor = "white";
//     shapeColor = "white";
// }

// function mouseMoved() {
//     circle(mouseX, mouseY, 30);


function mouseDragged() {
    shapeColor = color(random(225), random(225), random(225));
    size = random(30,80);
    //num = random(3,8);
    fill(shapeColor);
    noStroke();

    circle(mouseX,mouseY, size);
}