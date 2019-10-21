/*merit badge random guess by leo N*/
var answer = Math.floor(Math.random()*100)+1;
alert(answer);
var guess = 0;
while(guess != answer){
  guess=prompt("guess a number between 1 and 100");
  if(guess < answer) alert("too low");
  else if(guess > answer) alert("to high");
}
alert("you got it");
