/*Create a function that adds two values and prints the answer to console (x & y).
Create three more functions that subtracts, multiplies and divides those same two variables (x & y).
Fully comment and Organize Your Code.*/
var number={
	x:5,
	y: 10,
}//varibles x and y are 5 and 10
addtion();//calls the adition function
subtraction();//calls the subtraction function
multiplication();// cals the multiplication function
divsion();//calls the divition function
function addtion(){
	console.log("5 + 10 = " +(number.x+number.y));//adds x and y
}
function subtraction(){
	console.log("5 - 10 = "+(number.x-number.y));//subracts y from x
}
function multiplication(){
	console.log("5 * 10 = "+number.x*number.y);//multiplys x by y
}
function divsion(){
	console.log("5 / 10 = "+number.x/number.y);//divides x by y
}
