//Leo Neumann, mar 12, calculator 

var answer =0;																									// declares variable that will be used in the console.log
var number =[];																									//creates the array used for solving the equation
var x=prompt("enter an equation.");															//prompts the user for an equation 
var n1=0;																												//variable that stores the first integer of the equation
var n2=0;																												//variable that stores the second integer in the equation
number=x.split("+");																						//brakes up equation entered into two numbers if it is an addition problem
n1=parseInt(number[0]);																					//stores the first integer in the "n1" function
n2=parseInt(number[1]);							
if(Number.isInteger(n2)){																				//checks if the second entry is an integer, 
answer = (n1 + n2);																							//if it is than the two numbers are added together 
}																																//if not the program moves on to the next operation
number=x.split("-")
n1=parseInt(number[0]);
n2=parseInt(number[1]);
if(Number.isInteger(n2)){ 																				//performs the same action as line 10 except with subtraction
answer = (n1 - n2);
}
number=x.split("*")
n1=parseInt(number[0]);
n2=parseInt(number[1]);
if(Number.isInteger(n2)){																					 //performs same action as lines 10 and 15 but with multiplication
answer = (n1 * n2);
 }
number=x.split("/");
n1=parseInt(number[0]);
n2=parseInt(number[1]);
if(Number.isInteger(n2)){																						//performs same action as line 10, 15, and 21 with division
answer = (n1 / n2);
}
if (Number.isNaN(answer)){																					//checks if the answer is not a number
console.log("something went wrong please run the program again.");	//if it is than it informs the user that there was an error
}else if(Number.isInteger(answer)){
console.log(x+ " = " +answer);																			//if it's not than the user is shown the answer to their operation
}
