var turn=0;
var total=0;
var winner=("cpu");
var again =true;
while (again ==true){
	if (again ==true){
		function base();
		confirm("do you want to play again?");
	} else alert ("thank you for playing");
}


function base(){
	while(total !=21){
		cpuTurn(turn);
		if (total >=21){
			winner = ("player");
			break;
		} else {
			userTurn(turn);
			total+ =turn;
		}
		declarWinner();
	}
}
function declarWinner(){
	if (winner == player){
		alert("you win");
	} else alert("the computer wins");
}
function userTurn(turn){
	turn=parseInt("imput number between 1 and 3");
	return turn;
}
function cpuTurn(turn){
	turn =Math.floor(Math.random()*3)+1;
	total = total+turn;
	return turn;
}
