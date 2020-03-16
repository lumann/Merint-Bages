/* Leo Neumann 2/19/20 feuary 17 */

var add =0;
var sub=0;
var mult=0;
var div=0;//varibles to be added to the array
var i=0;//varible to be used for the while loop

while(i<5){//while loop starts 
	var number=[//array is declared
  	parseInt(prompt("imput a number for x")),//user is prompted for x
    parseInt(prompt("imput a number for y")),//user is prompted for y
  ]
  addition();//calls addition function
  subtraction();//calls subtraction function
  multiplication();//calls multiplication function
  division();//calls division function
  number.push(add, sub, mult,div );//adds the varibls containing the sum and difrencs of x and y as well as x and y multiplyed as well as divided
  console.log(number);//prints x,y,the sum of x and y, the difrence of x and y, x and y multiplid together, and x divided by y. 
  i=i+1;//adds one to i so the loop will have to happen one less
}

function addition(){
	add = (number[0]+number[1]);//adds x and y
  return add;//stors that in the add varible
}
function subtraction(){
	sub=(number[0]-number[1]);//subtracts x by y 
  return sub;//stores x-y in the "sub" varible
}
function multiplication(){
	mult=(number[0]*number[1]);//multiplies x by y 
  return mult;//stors x*y in the "mult" varible
}
function division(){
	div=(number[0]/number[1])//divids x by y
  return div;//stors x/y in the div varible
}
