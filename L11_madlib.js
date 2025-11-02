// let colorPicker;
// let textBox;


// function setup() {
//     createCanvas(400,400);

//     textBox = createInput();
//     textBox.position(50,50);
//     textBox.input(display);

//     colorPicker = createColorPicker("orange");
//     colorPicker.position(50,100);

// }

// function draw() {
//     background(220);

// }

// function display() {
//     displayText = this.value();
// }

/////////////////////////////////////////////////////////////////////

let textBox1,textoBox2,textBox3,textBox4,textBox5;


function setup() {
    createCanvas(600,600);

    textBox1 = createInput();
    textBox1.position(width/2 - textBox1.width/2,100);

    textBox2 = createInput();
    textBox2.position(width/2 - textBox1.width/2,150);

    textBox3 = createInput();
    textBox3.position(width/2 - textBox1.width/2,100);

    textBox4 = createInput();
    textBox4.position(width/2 - textBox1.width/2,100);

    textBox5 = createInput();
    textBox5.position(width/2 - textBox1.width/2,100);
}
function draw() {
    background(220);
}