// let attempts = 0;
// let hiddenWord = "";
// let textBox;
// let button;
// let disText = "";
// let words = ["apple", "grape", "peach", "mango","lemon"];
// let hint = "";
// let 

// function setup() {
//     createCanvas(600,400);

//     hiddenWord = random(words);
//     hint = hiddenWord[0].toUpperCase() + " "+ "_ ".repeat(hiddenWord.length-1);
//     textBox = createInput();
//     textBox.position(width/2 - textBox.width/2, 200);
//     textBox.size(150, 30);
//     textBox.style("font-size", "16px");

//     button = createButton('Guess');
//     button.position(textBox.x + textBox.width + 30, 200);
//     button.size(100, 30);
//     button.mousePressed(checkGuess);
// }
// function draw() {
//     background(220);

//     textAlign(CENTER);
//     textSize(24);
//     text("guess the word!", width/2, 70);
//     text("attempts: " + attempts, width/2, 120);
//     text("hints: " +  hint, width/2, 170);
//     text(disText, width/2, 250);
// }

// function checkGuess() {
//     attempts++;

//     let guess = textBox.value().toLowerCase();  
//     message = getCorrectLetters(guess, hiddenWord);

//     if(guess == hiddenWord) {
//         message = "your guess is right, the correct word is" + hiddenWord;
//     } else if (guess.length !=5) {
//         message = "5 letters only"
//     } else {
//         message = "try again,  the correct letters "
//     }

// }

// function getCorrectLetters(guess, hiddenWord) {
//     let correctLetters = "";
//     for(let i=0; i<hiddenWord.length; i++) {
//         if(hiddenWord.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase)) {
//             correctLetters += guess[i].toUpperCase();
//         }
//     }
//     return correctLetters;
// }
////////////////////////////////////////////////////////////////////////////////////////////////

let attempts = 0; 
let hiddenWord = ""; 
let textBox; 
let button; 
let disText = ""; 
let words = ["apple", "grape", "peach", "mango", "lemon", "guava"]; 
let hint = ""; 
let message = ""; 

function setup() {
    createCanvas(600, 400); 

    hiddenWord = random(words); 
    hint = hiddenWord[0].toUpperCase() + " " + "_ ".repeat(hiddenWord.length-1); 

    textBox = createInput(); 
    textBox.position(width/2 - textBox.width/2, 200); 
    textBox.size(150, 30); 
    textBox.style("font-size", "16px");

    button = createButton('Guess'); 
    button.position(textBox.x + textBox.width + 30, 200); 
    button.size(100, 30); 
    button.mousePressed(checkGuess); 
}

function draw() {
    background(220); 

    textAlign(CENTER); 
    textSize(24); 
    text("Guess the Word!", width/2, 50); 
    text("Attempts: " + attempts, width/2, 100); 
    text("Hints:" + hint, width/2, 150); 
    text(message, width/2, 300); 
}

// function display() {
//     disText = textBox.value(); 
// }

function checkGuess() {
    attempts++; 

    let guess = textBox.value().toLowerCase(); 
    message = getCorrectLetters(guess, hiddenWord); 

    if(guess == hiddenWord) {
        message = "Your guess is right! The correct word is " + hiddenWord; 
    } else if (guess.length !=5) {
        message = "5 Letters Only!"
    } else {
        message = "Try Again. The correct letters are " + message; 
    }



}

function getCorrectLetters(guess, hiddenWord) {
    let correctLetters = ""; 
    for(let i=0; i<hiddenWord.length; i++) {
        if(hiddenWord.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase())) {
            correctLetters += guess[i].toUpperCase();
        }
    }
    return correctLetters;
}