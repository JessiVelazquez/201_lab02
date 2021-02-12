'use strict';

let userName = prompt("What is your name?")
alert ("Welcome to my 'About Me' site, " + userName +".")
let correctCount = 0

function gradQuestion() {
    let gradYearUW = prompt("Did I graduate from University of Washington in 2008?");
    let lowergradYearUW = gradYearUW.toLowerCase();
    switch(lowergradYearUW) {
        case "yes":
            //console.log("Correct, I did graduate UW in 2008!");
            alert("Correct, I did graduate UW in 2008!");
            correctCount++
            break;
        case "y":
            //console.log("Correct, I did graduate UW in 2008!");
            alert("Correct, I did graduate UW in 2008!");
            correctCount++
            break;
        case "true":
            //console.log("Correct, I did graduate UW in 2008!");
            alert("Correct, I did graduate UW in 2008!");
            correctCount++
            break;
        case "t":
            //console.log("Correct, I did graduate UW in 2008!");
            alert("Correct, I did graduate UW in 2008!");
            correctCount++
            break;
        default:
            //console.log("Incorrect. I graduated UW in 2008.");
            alert("Incorrect. I graduated UW in 2008.");
    }
}

gradQuestion();

function hikeQuestion() {
    let hobbyHike = prompt("Do I like to hike?");
    let lowerhobbyHike = hobbyHike.toLowerCase();
    switch(lowerhobbyHike) {
        case "yes":
            //console.log("Correct, I do like to hike!");
            alert("Correct, I do like to hike!");
            correctCount++
            break;
        case "y":
            //console.log("Correct, I do like to hike!");
            alert("Correct, I do like to hike!");
            correctCount++
            break;
        case "true":
            //console.log("Correct, I do like to hike!");
            alert("Correct, I do like to hike!");
            correctCount++
            break;
        case "t":
            //console.log("Correct, I do like to hike!");
            alert("Correct, I do like to hike!");
            correctCount++
            break;
        default:
            //console.log("Incorrect. I like to hike.");
            alert("Incorrect. I like to hike.");
    }
}

hikeQuestion();

function workQuestion() {
    let jobInnovasea = prompt("Did I work for Innovasea?");
    let lowerjobInnovasea = jobInnovasea.toLowerCase();
    switch(lowerjobInnovasea) {
        case "yes":
            //console.log("Correct! Yes I did");
            alert("Correct! Yes I did");
            correctCount++
            break;
        case "y":
            //console.log("Correct! Yes I did");
            alert("Correct! Yes I did");
            correctCount++
            break;
        case "true":
            //console.log("Correct! Yes I did");
            alert("Correct! Yes I did");
            correctCount++
            break;
        case "t":
            //console.log("Correct! Yes I did");
            alert("Correct! Yes I did");
            correctCount++
            break;
        default:
            //console.log("Incorrect, I did work for Innovasea.");
            alert("Incorrect, I did work for Innovasea.");
    }
}

workQuestion();

function soloAlbumQuestion() {
    let soloAlbum = prompt("Have I ever released a solo album?");
    let lowersoloAlbum = soloAlbum.toLowerCase();
    switch(lowersoloAlbum) {
        case "yes":
            //console.log("Correct, I have released a solo album.");
            alert("Correct, I have released a solo album.");
            correctCount++
            break;
        case "y":
            //console.log("Correct, I have released a solo album.");
            alert("Correct, I have released a solo album.");
            correctCount++
            break;
        case "true":
            //console.log("Correct, I have released a solo album.");
            alert("Correct, I have released a solo album.");
            correctCount++
            break;
        case "t":
            //console.log("Correct, I have released a solo album.");
            alert("Correct, I have released a solo album.");
            correctCount++
            break;
        default:
            //console.log("Incorrect. I have released multiple of them.");
            alert("Incorrect, I have released multiple of them.");
    }
}

soloAlbumQuestion();

function whidbeyIslandQuestion() {
    let whidbeyIsland = prompt("Do I live on Whidbey Island?");
    let lowerwhidbeyIsland = whidbeyIsland.toLowerCase();
    
    switch(lowerwhidbeyIsland) {
        case "yes":
            //console.log("Correct, I live on Whidbey Island.");
            alert("Correct, I live on Whidbey Island.");
            correctCount++
            break;
        case "y":
            //console.log("Correct, I live on Whidbey Island.");
            alert("Correct, I live on Whidbey Island.");
            correctCount++
            break;
        case "true":
            //console.log("Correct, I live on Whidbey Island.");
            alert("Correct, I live on Whidbey Island.");
            correctCount++
            break;
        case "t":
            //console.log("Correct, I live on Whidbey Island.");
            alert("Correct, I live on Whidbey Island.");
            correctCount++
            break;
        default:
            //console.log("Incorrect, I do live on Whidbey Island.")
            alert("Incorrect, I do live on Whidbey Island.")
    }    
}

soloAlbumQuestion();

function numberGuess() {
    let i = Math.floor(Math.random() * 100);
    console.log(i);
    let ctr = 0;
    let userGuess = ''
    while ((userGuess != i) && (ctr < 4)) {
        let userGuess = parseInt(prompt("Guess a number between 0-99:"));
        console.log(userGuess + '');
        if (userGuess < i) {
            alert("Your guess is too low");
        }
        if (userGuess > i) {
            alert("Your guess is too high");
        }
        if (userGuess === i) {
            alert("You guessed correct!");
            correctCount++
            break;
        }
        ctr = ctr + 1;
        console.log(ctr);
        if (ctr >= 4) {
            alert("You are out of guesses. Correct answer was " + i + ".");
            break;
        }
    }
}

numberGuess();

function favColorGuess() {
    let favColors;
    favColors = ['blue', 'green', "yellow", "peach"]
    console.log('favorite colors', favColors)
    let guessAmount = 6
    
    for (let i = 1; i < guessAmount; i +=1) {
        let colorGuess = prompt("Guess one of my favorite colors:")
        if (colorGuess === favColors[0] || colorGuess === favColors[1] || colorGuess === favColors[2] || colorGuess === favColors[3]) {
            console.log(colorGuess)
            alert("You are correct!")
            alert(favColors + " were possible answers")
            correctCount++
            break;
        }
        else {
            alert("Incorrect, guess again:");
        } 
    }
}

alert("Thanks for visiting my site, " + userName + "! Bye for now. You got " + correctCount + " answers right.")

