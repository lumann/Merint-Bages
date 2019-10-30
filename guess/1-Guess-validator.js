  /* Guess validator function: merit badge 2 
  adds number of guesses, has quit option, and guess validator  
  By Leo Neumann
 */

var answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
var turns = 0;
while(guess != answer){
  guess=prompt("guess a number between 1 and 100");
  if (guess == ("q")) break;
  if (validator(guess)==true) {
	turns=turns+1;
	if(guess < answer) alert("too low");
	else if(guess > answer) alert("to high");
  }
  else alert("invalid guess");
}
if (guess == answer) alert ("you got it in "+turns+" turns");
else alert("quitter");
function validator(guess) {
	if (100 <= guess <= 1) return true;
	else return false;
}
