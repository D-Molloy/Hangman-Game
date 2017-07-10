var starWords = ["ackbar", "alderaan", "anakin", "bespin", "biggs", "c3po", "calrissian", "chewbacca", "kashyyk", "coruscant", "dantooine", "dagobah", "destroyer", "droid", "ewok", "force", "galaxy", "geonosis", "greedo", "grievous", "imperial", "jedi", "kenobi", "kessel", "midichlorians", "organa", "podracing", "palpatine", "r2d2", "rebellion", "sandpeople", "skywalker", "solo", "stormtrooper", "tauntaun", "wedge", "windu", "wookie", "worshipfullness", "yavin"];

//generate a random number which will be the index for the arrayElement we will use for currentWord
var random = Math.floor((Math.random()*(starWords.length - 1)));

//select the currentWord from the Array
var currentWord = starWords[random];

//console.log(currentWord)

//find the non-whitespace characters in currentWord and place them in an array
var currentWordArray = currentWord.match(/\S/g);

//create and array the same size as currentWordArray in which to place the blank spaces
var blanksArray = new Array(currentWordArray.length);

//fill blanksArray with underscores representing all letters in currentWordArray
for (var i = 0; i < currentWordArray.length; i++) {
	blanksArray[i] = "_ ";
}

//function that inserts the current blanksArray into the current-word tag
printCurrentWord = function(){
	var currentWordHTML = document.querySelector(".current-word");
	currentWordHTML.innerHTML = blanksArray.join(' ');
}

//ask the user if they want the full Star Wars Stormtrooper Hangman experience.  If True, play the song.
strongForce = function() {
	var userForceChoice = confirm("Do you want to feel the Force flow through you?");
	if (userForceChoice == true) {
		var audioSource = document.querySelector("#audio-source");
		audioSource.src="assets/sounds/star-wars-theme.mp3";
		audioSource.play();
	}
}

//declare variables used in the onkeyup event
var badGuessArray = [];
var guessCount = 10;
var badGuessCount = 0;
var playerWins = 0;
var playerLosses = 0;

// a function that resets some of the global variables
globalOnKeyVarReset = function(){
	badGuessArray = [];
	guessCount = 10;
	badGuessCount = 0;
	
	return badGuessArray;
	return guessCount;
	return badGuessCount;
}

// a function that resets the current word
currentWordReset = function() {
	random = Math.floor((Math.random()*(starWords.length - 1)));
	currentWord = starWords[random];
	currentWordArray = currentWord.match(/\S/g);
	blanksArray = new Array(currentWordArray.length);
	for (var i = 0; i < currentWordArray.length; i++) {
		blanksArray[i] = "_ ";
	}
	return random;
	return currentWord;
	return currentWordArray;
	return blanksArray
}

// a function called at the end of the game that resets some of the global variable, resets the current word, and prints the new blanksArray to the screen
gameReset = function(){
	globalOnKeyVarReset();
	currentWordReset();
	printCurrentWord();
}

// take the key the user presses and compare it to all of the characters in currentWord
document.onkeyup = function(event) {
	var userGuess = event.key;
	var letterFound = false;

	// console.log(userGuess);
	// console.log(currentWordArray);

	//iterate through currentWordArray to check if the userGuess is in it.  If so place the letter into blanksArray at the correct index
	for (var i = 0; i < currentWordArray.length; i++) {
		if (userGuess == currentWordArray[i]) {
			blanksArray[i] = userGuess;
			// console.log(blanksArray);
			document.querySelector(".current-word").innerHTML = blanksArray.join(' ');
			letterFound = true;
		} 
	}

	//if the letter is not in the currentWordArray add it to the badGuessArray and print it to the screen, change the image, reduce and print the guessCount
	if (letterFound == false) {
		badGuessArray.push(userGuess);
		badGuessCount++;
		document.querySelector(".wrong-guesses").innerHTML = badGuessArray.join(', ');
		document.querySelector(".hangman-img").src="assets/images/hangman" + badGuessCount + ".png";
		guessCount--;
		document.querySelector(".remaining-guesses").innerHTML = guessCount;

		// change the billboard, the image, the music to their losing state and resets the game
		if (guessCount == 0) {
			var billboard = document.querySelector(".billboard");
			billboard.innerHTML= "You lose! Press a letter to start a new round!";
			document.querySelector(".hangman-img").src="assets/images/loser.gif";
			var audioSource = document.querySelector("#audio-source");
			audioSource.src="assets/sounds/march.mp3";
			audioSource.play();
			playerLosses++;
			document.querySelector(".player-losses").innerHTML = playerLosses;
			gameReset();
		}

	}

	//turn the blanksArray and CurrentWordArray into strings so I can can compare them in the if statement
	var blanksArrayString = blanksArray.toString();
	var currentWordArrayString = currentWordArray.toString();

	//compare the two strings and if they are the same, change the billboard, image, music to their winning state, and resets the game
	if (blanksArrayString == currentWordArrayString) {
		var billboard = document.querySelector(".billboard");
		billboard.innerHTML= "You win! Press a letter to start a new round!";
		document.querySelector(".hangman-img").src="assets/images/dancing.gif";
		var audioSource = document.querySelector("#audio-source");
		audioSource.src="assets/sounds/cantina.mp3";
		audioSource.play();
		playerWins++;
		document.querySelector(".player-wins").innerHTML = playerWins;
		gameReset();
	}
}

strongForce();
printCurrentWord();



