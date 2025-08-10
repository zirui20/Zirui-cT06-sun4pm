let shapeColor = "blue"


function setup() {
    createCanvas(600,600);
    background(220);
}

function draw() {
    
    fill(shapeColor);
    circle(width/2,height/2,100);

}

function mousePressed() {
    shapeColor = random(255);
}

function mouseReleased() {
    //shapeColor = "white";
    shapeColor = "white";
}