/*Random Number Generator Code*/
var maxNumber = 20;
var counter = 0;
var maxGuesses = 7;
/*Math.random selects a random number from 0(inclusive) to 1(exclusive). We scale it up how we want*/
/*e.g. rng picks .7 and then we add 1. Now the Math.floor function rounds the number down to 1. This allows us to always start at 1.*/
var randomNumber = Math.floor(Math.random() * maxNumber)+1;

while (Attempt != randomNumber){


    var Attempt = prompt("Please pick a number between 1 and " + maxNumber);
    counter ++;

    /*Ends program if cancel is selected*/
    if(Attempt === null){
        document.write("Thank you for playing. If you wish to try again, press f5")
        break;
    }

    /*Evaluates guess count and ends program if amount of guesses exceeds the allowed guesses*/
    if (counter > maxGuesses)
    {
        
        document.write("Sorry, you have no more guesses. Please press f5 to play again")
        break;
    }
    /* Evaluates =,< and > characterists of the guess in relation to the random number*/
    else if (Attempt == randomNumber){
        document.write("Congratulations, that is the correct number!");
        document.write("<br>");
        document.write("The correct number was "+ randomNumber+ "."+"<br>");
        document.write("You guessed " + counter + " times.");10
    }
    else if(Attempt < randomNumber){
        alert("Your guess is too low. Please guess again");
    }
    else if(Attempt > randomNumber){
        alert("Your guess is too high. Please guess again.");
    }
    else{
        document.write("Thank you for playing ");
    }

}
