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
let arr = ["enter a noun","enter a verb","enter an adjective","enter an adverb","enter a place"];
let button;
let displayText1,displayText2,displayText3,displayText4,displayText5;
let arr2 = [];


function setup() {
    createCanvas(600,600);

    textBox1 = createInput();
    textBox1.position(width/2 - textBox1.width/2,100);

    textBox2 = createInput();
    textBox2.position(width/2 - textBox1.width/2,150);

    textBox3 = createInput();
    textBox3.position(width/2 - textBox1.width/2,200);

    textBox4 = createInput();
    textBox4.position(width/2 - textBox1.width/2,250);

    textBox5 = createInput();
    textBox5.position(width/2 - textBox1.width/2,300);

    button = createButton('generate story')
    button.position(width/2 - button.width/2,350);
    button.mousePressed(display);
}
function draw() {
    background(220);

    for(let i=0; i<arr.length; i++) {
            textSize()
            text(arr2[i],50,400+i*50);
        }


        
}

function display() {
    displayText1 = "noun:" + textBox1.value();
    arr2.push(displayText1);
    displayText2 = "verb:" + textBox2.value();
    arr2.push(displayText2);
    displayText3 = "adj:" + textBox3.value();
    arr2.push(displayText3);
    displayText4 = "adv:" + textBox4.value();
    arr2.push(displayText4);
    displayText5 = "palce:" + textBox5.value();
    arr2.push(displayText5);
}

