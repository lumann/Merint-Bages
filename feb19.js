// Leo Neumann 2/19/20 February 19 


function addition() {																																							//defines the addition function
  add = (number[0] + number[1]); 																																	//adds x and y
  return add; 																																										//stores that in the add variable
}

function subtraction() {																																					//defines the subtraction function 
  sub = (number[0] - number[1]); 																																	//subtracts x by y 
  return sub;																																											//stores x-y in the "sub" variable
}

function multiplication() {																																				//defines the multiplication function
  mult = (number[0] * number[1]); 																																//multiplies x by y 
  return mult; 																																										//stores x*y in the "mult" variable
}

function division() {																																							//defines the division function 
  div = (number[0] / number[1]); 																																	//divides x by y
  return div; 																																										//stores x/y in the div variable
}

var add = 0;
var sub = 0;
var mult = 0;
var div = 0; 																																											//variables to be added to the array were the sup difference etc. of x and y are stored 
var i = 0; 																																												//variable to be used for the while loop
var n = parseInt(prompt("How many times would you like this program to run between 1 and 10?")); 	//variable used for determining how many times code should run
while (Number.isNaN(n)) { 																																				//while the input above is not a number the user will be prompted for a number.
  n = parseInt(prompt("That is not a number try again."));
}
while (Number.isInteger(n)) {																																			//once the input is a number the computer checks if the number is between 1 and 10.
  if (n <= 0 || n > 10) {
    n = parseInt(prompt("That is not a number between 1 and 10; please try again."));							//if the number is not between 1 and 10 the user is prompted again 
  } else {
    console.log("You told the computer to run this program " + n + " time(s)."); 									//tells the user how many times they asked the computer to run the loop.
    break;
  }
}
while (i < n) { 																																									//while loop starts 
  var number = [ 																																									//array is declared
    parseInt(prompt("Enter a number for x.")), 																										//user is prompted for x
    parseInt(prompt("Enter a number for y.")), 																										//user is prompted for y
  ]
  addition(); 																																										//calls addition function
  subtraction(); 																																									//calls subtraction function
  multiplication(); 																																							//calls multiplication function
  division(); 																																										//calls division function
  number.push(add, sub, mult, div);																															 	//adds the variables containing the sum and difference of x and y as well as x and y multiplied as well as divided
  console.log(number); 																																						//prints x,y,the sum of x and y, the difference of x and y, x and y multiplied together, and x divided by y. 
  i = i + 1; 																																											//adds one to i so the loop will have to happen one less
}																																																	//end of code
