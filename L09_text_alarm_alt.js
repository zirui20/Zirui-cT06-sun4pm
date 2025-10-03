let csecond, cminute, chour;
let ctime; // will hold the current hour, minute and second 

let interval; // reference to the timer
let countdown; // number to count
let alarm;

function preload() {
    alarm = loadSound('https://prod.liveshare.vsengsaas.visualstudio.com/join?540A8A50150FA055E04C8E943A859C1AB8E1')
}


function setup(){
    createCanvas(600,400);

    textSize(100);
    textAlign(CENTER, CENTER); // align to the center
    textFont('consolas');
    countdown = 5; // set initial value of countdown

}



function draw(){
    background('pink');
    csecond = second(); // current second
    cminute = minute(); // current minute
    chour = hour(); // current hour
    ctime = nf(chour,2) + ":" + nf(cminute,2) + ":" + nf(csecond,2);

    // write the text
    text(ctime, width/ 2, height/ 2);

    // display the count down
    text(countdown, width/2, height/2 + 100);
}


function mousePressed(){
    // start the timer...
    interval = setInterval(updateCountdown, 1000); 
}

function updateCountdown(){
    // increase the value of countdown variable.
    if (countdown > 0){
        countdown = countdown - 1;
    }
    else{
        // stop the timer
        clearInterval(interval);

    }
    
}