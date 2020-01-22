var tern=0;
var total=0;
var winner=("cpu");
while(total !=21){
	turn =Math.floor(Math.random()*3)+1;
	total = total+tern;
	if (total >=21){
		winner = ("player");
		break;
	} else {
		tern=parseInt("imput number between 1 and 3");
		total = turn+total;
}
if (winner == player){
	alert("you win");
} else alert("the computer wins");
