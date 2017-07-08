var starWords = ["alderaan", "anakin", "skywalker", "wookie", "chewbacca", "kashyyk", "coruscant", "dantooine", "dagobah", "destroyer", "droid", "ewoks", "force", "galaxy", "grievous", "solo", "calrissian", "windu", "midichlorians", "kenobi", "podracing", "palpatine", "sandpeople", "tautaun", "stormtrooper", "bespin", "geonosis", "yavin", "ackbar", "wedge"];

//generate a random number which will be the index for the arrayElement we will use for currentWord

var random = Math.floor((Math.random()*(starWords.length - 1)));

//select the currentWord from the Array
var currentWord = starWords[random];

//find the non-whitespace characters in currentWord and place them in an array
var currentWordArray = currentWord.match(/\S/g);

//create and array the same size as currentWordArray in which to place the blank spaces
var blanksArray = new Array(currentWordArray.length);

console.log(currentWord)

//fill blanksArray with underscores representing all letters in currentWordArray
for (var i = 0; i < currentWordArray.length; i++) {
	blanksArray[i] = "_ ";
}

//remove the comma seperator from the blanks array using .join
var noCommaBlanksArray = blanksArray.join('');

strongForce = function() {
	var userForceChoice = confirm("Do you want to feel the Force?");
	if (userForceChoice == true) {
		var audioSource = document.querySelector("#audio-source");
		audioSource.src="assets/sounds/star-wars-theme.mp3";
		audioSource.play();
	}
}


//insert the current noCommaBlanksArray into the current-word tag
printCurrentWord = function(){
	var currentWordHTML = document.querySelector(".current-word");
	currentWordHTML.innerHTML = noCommaBlanksArray;
}

// take the key the user presses and compare it to all of the characters in currentWord

document.onkeyup = function(event) {
	var userGuess = event.key;
	var badGuessArray = [];
	var badGuessCount = 0;
	console.log(userGuess);
	console.log(currentWordArray);
	for (var i = 0; i < currentWordArray.length; i++) {
		if (currentWordArray[i] === userGuess){
			console.log("correct");
			noCommaBlanksArray[i] = userGuess;
			console.log(noCommaBlanksArray);
		} 
	}
}

strongForce();
printCurrentWord();


//  Change the image on a button press.  Good use for a switcch statement...set a variable for the number of wrong guesses and have the case for each variable value be an image
// document.onkeyup = function(event) {
// 	document.querySelector(".hangman-img").src="assets/images/hangman1.png";
// }



