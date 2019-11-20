  /* Guess advanced: merit badge 3 
  adds number of guesses, has quit option, and guess validator. asks if player would like to play again, gives the player the average turns per game.
  By Leo Neumann
 */
 
var games = 0;
var again = true;
var totalTurns = 0;
while (again == true){
	var answer = Math.floor(Math.random()*100)+1;
	console.log(answer);
	var guess = 0;
	var turns = 0;
	games++;
	while(guess != answer){
		guess=prompt("guess a number between 1 and 100");
		if (guess == "q") break;
		else if (validator(guess) == true){
			turns++;
			if(guess < answer) alert("too low");
			else if(guess > answer) alert("to high");
		}
		else alert("invalid guess");
	}
	if (guess == "q"){
		alert("you quit");
		break;
	}
	else {
		gameStats(turns);
		again = false;
		again = newGame();
	}
}
function validator(guess){
	if (100 >= guess >= 1) return true;
	else return false;
}
function gameStats(){
	alert("you got it in " +turns+ " turns.");
	totalTurns = totalTurns + turns;
	var averageTurns = 0;
	averageTurns = totalTurns/games;
	alert("you won " +games+ " games with an average of " +averageTurns+ " turns per game");
}
function newGame(){
	again = confirm("do you want to play again?");
	if(again==true) return true;
	else alert("thank you for playing")
}
