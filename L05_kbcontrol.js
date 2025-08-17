let shapeColor = 'blue';
let circlesize = 5 ;
function setup(){
    createCanvas(400,400);
    background(220);
    noStroke();

}

function mousePressed(){
    shapeColor = color(random(225), random(225), random(225));
    circlesize = 5;
}

function mouseDragged(){
    fill(shapeColor)
    ellipse( mouseX, mouseY, circlesize, circlesize)
    circlesize += 0.5;
}