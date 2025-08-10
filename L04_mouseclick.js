function setup() {
    createCanvas(400,400);
    background(220);
}

function draw() {
    for(let i = 0; 1<5; i++) {
        fill(0, i*50, 0);
        circle(50 + i*50, 50 +i*50,50);
    }
}