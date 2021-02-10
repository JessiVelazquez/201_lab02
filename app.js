'use strict';

let userName = prompt("What is your name?")
alert ("Welcome to my 'About Me' site, " + userName +".")

let gradYearUW = prompt("Did I graduate from University of Washington in 2008?");
let lowergradYearUW = gradYearUW.toLowerCase();

switch(lowergradYearUW) {
    case "yes":
        //console.log("Correct, I did graduate UW in 2008!");
        alert("Correct, I did graduate UW in 2008!");
        break;
    case "y":
        //console.log("Correct, I did graduate UW in 2008!");
        alert("Correct, I did graduate UW in 2008!");
        break;
    case "true":
        //console.log("Correct, I did graduate UW in 2008!");
        alert("Correct, I did graduate UW in 2008!");
        break;
    case "t":
        //console.log("Correct, I did graduate UW in 2008!");
        alert("Correct, I did graduate UW in 2008!");
        break;
    default:
        //console.log("Incorrect. I graduated UW in 2008.");
        alert("Incorrect. I graduated UW in 2008.");
}

let hobbyHike = prompt("Do I like to hike?");
let lowerhobbyHike = hobbyHike.toLowerCase();

switch(lowerhobbyHike) {
    case "yes":
        //console.log("Correct, I do like to hike!");
        alert("Correct, I do like to hike!");
        break;
    case "y":
        //console.log("Correct, I do like to hike!");
        alert("Correct, I do like to hike!");
        break;
    case "true":
        //console.log("Correct, I do like to hike!");
        alert("Correct, I do like to hike!");
        break;
    case "t":
        //console.log("Correct, I do like to hike!");
        alert("Correct, I do like to hike!");
        break;
    default:
        //console.log("Incorrect. I like to hike.");
        alert("Incorrect. I like to hike.");
}

let jobInnovasea = prompt("Did I work for Innovasea?");
let lowerjobInnovasea = jobInnovasea.toLowerCase();

switch(lowerjobInnovasea) {
    case "yes":
        //console.log("Correct! Yes I did");
        alert("Correct! Yes I did");
        break;
    case "y":
        //console.log("Correct! Yes I did");
        alert("Correct! Yes I did");
        break;
    case "true":
        //console.log("Correct! Yes I did");
        alert("Correct! Yes I did");
        break;
    case "y":
        //console.log("Correct! Yes I did");
        alert("Correct! Yes I did");
        break;
    default:
        //console.log("Incorrect, I did work for Innovasea.");
        alert("Incorrect, I did work for Innovasea.");
}

let soloAlbum = prompt("Have I ever released a solo album?");
let lowersoloAlbum = soloAlbum.toLowerCase();

switch(lowersoloAlbum) {
    case "yes":
        //console.log("Correct, I have released a solo album.");
        alert("Correct, I have released a solo album.");
        break;
    case "y":
        //console.log("Correct, I have released a solo album.");
        alert("Correct, I have released a solo album.");
        break;
    case "true":
        //console.log("Correct, I have released a solo album.");
        alert("Correct, I have released a solo album.");
        break;
    case "t":
        //console.log("Correct, I have released a solo album.");
        alert("Correct, I have released a solo album.");
        break;
    default:
        //console.log("Incorrect. I have released multiple of them.");
        alert("Incorrect, I have released multiple of them.");
}

let whidbeyIsland = prompt("Do I live on Whidbey Island?");
let lowerwhidbeyIsland = whidbeyIsland.toLowerCase();

switch(lowerwhidbeyIsland) {
    case "yes":
        //console.log("Correct, I live on Whidbey Island.");
        alert("Correct, I live on Whidbey Island.");
        break;
    case "y":
        //console.log("Correct, I live on Whidbey Island.");
        alert("Correct, I live on Whidbey Island.");
        break;
    case "true":
        //console.log("Correct, I live on Whidbey Island.");
        alert("Correct, I live on Whidbey Island.");
        break;
    case "t":
        //console.log("Correct, I live on Whidbey Island.");
        alert("Correct, I live on Whidbey Island.");
        break;
    default:
        //console.log("Incorrect, I do live on Whidbey Island.")
        alert("Incorrect, I do live on Whidbey Island.")
}

let i = Math.floor(Math.random() * 100);
console.log(i);
let userGuess = Number.parseInt(prompt("Guess a number between 0-99"));
console.log(userGuess); 
let ctr = 0;

while ((userGuess != i) && (ctr < 4)) {
    console.log(userGuess + '');
    if (userGuess < i) {
        alert("Your guess is too low");
    }
    if (userGuess > i) {
        alert("Your guess is too high");
    }
    else {
        alert("You guessed correct!")
        break
    }
    ctr = ctr + 1;
    console.log(ctr);
    if (ctr >= 4) {
        alert("You are out of guesses. Correct answer was " + i + ".");
        break
    }
    userGuess = prompt("Guess again.");
}

alert("Thanks for visiting my site, " + userName + "! Bye for now.")
