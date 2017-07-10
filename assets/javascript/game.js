var starWords = ["ackbar", "alderaan", "anakin", "bespin", "biggs", "C3PO", "calrissian", "chewbacca", "kashyyk", "coruscant", "dantooine", "dagobah", "destroyer", "droid", "ewok", "force", "galaxy", "geonosis", "greedo", "grievous", "imperial", "jedi", "kenobi", "kessel", "midichlorians", "podracing", "palpatine", "R2D2", "rebellion", "sandpeople", "skywalker", "solo", "stormtrooper", "tautaun", "wedge", "windu", "wookie", "worshipfullness", "yavin"];

//generate a random number which will be the index for the arrayElement we will use for currentWord

var random = Math.floor((Math.random()*(starWords.length - 1)));

//select the currentWord from the Array
var currentWord = starWords[random];

console.log(currentWord)
//find the non-whitespace characters in currentWord and place them in an array
var currentWordArray = currentWord.match(/\S/g);


//create and array the same size as currentWordArray in which to place the blank spaces
var blanksArray = new Array(currentWordArray.length);



//fill blanksArray with underscores representing all letters in currentWordArray
for (var i = 0; i < currentWordArray.length; i++) {
	blanksArray[i] = "_ ";
}


//function to get a new word

getNewWord = function() {
	return currentWord = starWords[random];
	return currentWordArray = currentWord.match(/\S/g);
	return blanksArray = new Array(currentWordArray.length);
}


//ask the user if they want the full Star Wars Stormtrooper Hangman experience.  If True, play the song.
strongForce = function() {
	var userForceChoice = confirm("Do you want to feel the Force?");
	if (userForceChoice == true) {
		var audioSource = document.querySelector("#audio-source");
		audioSource.src="assets/sounds/star-wars-theme.mp3";
		audioSource.play();
	}
}


//function that inserts the current blanksArray into the current-word tag

printCurrentWord = function(){
	var currentWordHTML = document.querySelector(".current-word");
	currentWordHTML.innerHTML = blanksArray.join(' ');
}

// take the key the user presses and compare it to all of the characters in currentWord

var badGuessArray = [];
var guessCount = 6;
var badGuessCount = 0;
// var goodGuessCount = 0;
var playerWins = 0;

document.onkeyup = function(event) {
	var userGuess = event.key;
	var letterFound = false;
//create a wins variable
	
	console.log(userGuess);
	// console.log(indexOfLetter);
	console.log(currentWordArray);
	for (var i = 0; i < currentWordArray.length; i++) {
		if (userGuess == currentWordArray[i]) {
			// console.log("correct");
			blanksArray[i] = userGuess;
			console.log(blanksArray);
			document.querySelector(".current-word").innerHTML = blanksArray.join(' ');
			letterFound = true;
		} 

		
	}

	if (letterFound == false) {
		badGuessArray.push(userGuess);
		badGuessCount++;
		document.querySelector(".wrong-guesses").innerHTML = badGuessArray;
		document.querySelector(".hangman-img").src="assets/images/hangman" + badGuessCount + ".png";
		
	}

	guessCount--;
	document.querySelector(".remaining-guesses").innerHTML = guessCount;




	var blanksArrayString = blanksArray.toString();
	var currentWordArrayString = currentWordArray.toString();
	if (blanksArrayString == currentWordArrayString) {
		document.querySelector(".billboard").innerHTML="You win!!!!";
		document.querySelector(".hangman-img").src="assets/images/dancing.gif";
		var audioSource = document.querySelector("#audio-source");
		audioSource.src="assets/sounds/cantina.mp3";
		audioSource.play();
		playerWins++;
		document.querySelector(".player-wins").innerHTML = playerWins;
		// var playNewGame = confirm("Play again?");
		// if (playNewGame == true) {
		// 	getNewWord();
		// } else {

		// }
	}

	//change song to cantina
	//reset arrays? variables?
	//playerWins++;
	//print playerWins to html player-wins


}


/*

To do:
function for printing badguessarray

compare to currentWordsArray - badGuessArray to end game


*/






strongForce();
printCurrentWord();


//  Change the image on a button press.  Good use for a switcch statement...set a variable for the number of wrong guesses and have the case for each variable value be an image
// document.onkeyup = function(event) {
// 	document.querySelector(".hangman-img").src="assets/images/hangman1.png";
// }



