
//////////////////////////////////////////////////////
// red ball hit the right side


// let x = 300;
// let speedX = 2;
// let ra = 25;


// function setup() {
//     createCanvas(600,400);
// }

// function draw() {
//     background('lightblue');
//     fill('red');
//     noStroke();
//     circle(x,200,50);

//     if(x>=width-ra || x<=ra) {
//         speedX *=-1;
//     }


//     x += speedX;
//     circle (x,height/2,40);
// }


//////////////////////////////////////////////////////////////////////
// array of foods

// let arr = ["pizza", "pies", "chocolates", "chips"];

// function setup() {
//     createCanvas(400,400);
// }

// function draw() {
//     background(0);

//     fill('orange');
//     textSize(20);
//     textAllign(CENTER,CENTER);

//     for (let i=0; i<arr.length; i++) {
//         text(arr[i], width/2, 100 + i*50);
//     }
// }


///////////////////////////////////////////////////////////
// colourpicker

let colorPicker;

function setup() {
    createCanvas(600,600);

    colorPicker = createColorPicker('orange');
    colorPicker.position(width/2, height-50);
}

function draw() {
    background(colorPicker.vaule());

    text("choose your background colour", 50, colorPicker.y+15);

    React(50,100,150,50);
}