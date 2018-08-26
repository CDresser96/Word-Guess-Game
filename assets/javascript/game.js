var word = ["summer", "tuesday", "dreams", "aha", "never"];
var actualWord = "";
var letters = [];
var output = [];
var wrongLetters = [];

var num = 0;
var guessesLeft = 12;
var losses = 0;
var wins = 0;


function gameStart () {
    actualWord = word[Math.floor(Math.random() * word.length)];
    letters = actualWord.split("");
    num = letters.length;


    guessesLeft = 12;
    wrongLetters = [];
    output = [];

    for(var i = 0; i < num; i++) {
        output.push("_")
        console.log(output)
    }

    document.getElementById("secretAnswer").innerHTML = output.join(" ");
    document.getElementById("game").innerHTML = wins;
    document.getElementById("losses").interHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
};

function checkAnswer (letter) {
    var letterInWord = false;

    for(var j = 0; j < num; j++) {

        if (letter == actualWord[j]) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for(var j = 0; j < num; j++) {
            if (actualWord [j] == letter) {
                output[j] = letter;
                console.log(output)
            }
        }
    } else {
        wrongLetters.push(letter);
        guessesLeft--;
    }
};


gameStart();

function rounds() {
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("answersGuessed").innerHTML = wrongLetters;
    document.getElementById("secretAnswer").innerHTML = output.join(" ");

    if(letters.toString() == output.toString()) {
        wins++
        document.getElementById("game").innerHTML = wins;
        play();
    } else if (guessesLeft===0) {
        losses++
        document.getElementById("losses").innerHTML = losses;
        gameStart();
    }
};


document.onkeypress = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    checkAnswer(userGuess);
    rounds();
};

//music
function play() {
    if (actualWord=="summer") {
        var audio = "<audio autoplay = 'autoplay'>" + "<source src='assets/images/Don Henley - The Boys Of Summer (1984).mp3'></audio>"
        document.querySelector("#audio").innerHTML = audio;
        var picture = "<img src='assets/images/summer.png'>"
        document.querySelector("#picture").innerHTML = picture;
        gameStart ();
    } else if (actualWord=="tuesday") {
        var audio = "<audio autoplay = 'autoplay'>" + "<source src='assets/images/WhatAboutLove.mov'></audio>"
        document.querySelector("#audio").innerHTML = audio;
        var picture = "<img src='assets/images/tuesday.png'>"
        document.querySelector("#picture").innerHTML = picture;
        gameStart ();
    } else if (actualWord == "dreams") {
        var audio = "<audio autoplay = 'autoplay'>" + "<source src='assets/images/Fleetwood Mac - Dreams [with lyrics].mp3'></audio>"
        document.querySelector("#audio").innerHTML = audio;
        var picture = "<img src='assets/images/dreams.png'>"
        document.querySelector("#picture").innerHTML = picture;
        gameStart ();
    } else if (actualWord == "aha") {
        var audio = "<audio autoplay = 'autoplay'>" + "<source src='assets/images/a-Ha - Take On Me [lyrics].mp3'></audio>"
        document.querySelector("#audio").innerHTML = audio;
        var picture = "<img src='assets/images/aha.png'>"
        document.querySelector("#picture").innerHTML = picture;
        gameStart ();
    } else if (actualWord == "never") {
        var audio = "<audio autoplay = 'autoplay'>" + "<source src='assets/images/NeverGonnaGiveYouUp.mov'></audio>"
        document.querySelector("#audio").innerHTML = audio;
        var picture = "<img src='assets/images/never.png'>"
        document.querySelector("#picture").innerHTML = picture;
        gameStart ();
    }
};