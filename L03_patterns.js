function setup() {
    createCanvas(600,600);
    background(220);
    // noLoop(); // Stops continuous drawing
  }


let colorValue = 0;
let spacing = 90;

function draw(){
//   // circle(75,200,100);
//   // circle(225,200,100);
//   // circle(375,200,100);
//   // circle(525,200,100);

//   for(let i=0; i<4; i++) {
//     // fill(colorValue%225)
//     // circle(spacing + i*spacing, 200, 40);
//     if(1%2 === 0) {
//         fill(0);

//   } else {
//     fill(255);
  
// }

// circle(spacing + i*spacing, 200, 40);
// rect(0,100, width, 400);
// circle(width/2, height/2, 100);
function draw(){
    let diameter = 50;
    let numCircles = 5; 
    let totalWidth = diameter * numCircles;
    let startX = diameter/2; 
    //let startX = diameter/2;
    let startY = diameter/2; 


    for(let j =0; j<5; j++) {

        let y = startY + j*diameter; 

        for(let i=0; i<5; i++) {
            fill(0, i*50, 0); 
            circle(startX+i*diameter, y, diameter); 

            //circle(startX+i*diameter, height/2, diameter); 
            //circle(startX+i*diameter, diameter/2, diameter); 
            
        }
    }



}




