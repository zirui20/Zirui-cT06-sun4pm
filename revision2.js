
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

let arr = ["pizza", "pies", "chocolates", "chips"];

function setup() {
    createCanvas(400,400);
}

function draw() {
    background(0);

    fill('orange');
    textSize(20);
    textAllign(CENTER,CENTER);

    for (let i=0; i<arr.length; i++) {
        text(arr[i], width/2, 100 + i*50);
    }
}


///////////////////////////////////////////////////////////
// colourpicker

// let colorPicker;
// let textBox1;
// let textBox2;
// let text1;
// let text2;

// function setup() {
//     createCanvas(600,600);

//     colorPicker = createColorPicker('lightgreen');
//     colorPicker.position(width/2, height-50);

//     textBox1 = createInput();
//     textBox1.position(width/2, height-150);
//     textBox1.input(display1);

//     textBox2 = createInput();
//     textBox2.position(width/2, height-200);


// function draw() {
//     background(colorPicker.value());
//     textSize(18);
    

//     text("choose your background colour:", 60, colorPicker.y-100);
//     text("enter your name:", 60, colorPicker.y-130);
//     text("enter your age:", 60, colorPicker.y-160);
    

//     rect(50,100,500,150,50);
// }