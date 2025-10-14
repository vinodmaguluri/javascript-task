/*
1) Write a JavaScript script that compares two variables using different comparison operators (==, ===, !=, !==, >, <, >=, <=) and prints the results.
*/
var a=10;
var b=20;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a<=b);
console.log(a>=b);


/*
2)Write a JavaScript script that uses the ternary operator to determine
 if a number is even or odd.
*/
var hello=(a<=b)? "even":"odd";
console.log(hello);
/*
output:-
even
*/



/*
3)Expand the script to include a ternary operation 
that checks if a user is an adult (18+) or a minor.
*/
var age=(a<=b)?"adult":"minor";
console.log(age);
/*
output:-
adult
*/



/*
4)Grade Classification: Declare a variable score and 
set it to a value between 0 and 100.
 Use nested ternary operators to classify the score into grades:
  A (>= 90), B (>= 75), C (>= 60), D (>= 45), and F (below 45).
   Log the grade.
*/
var c=55;
var score=(c>=90)?"A":(c>=75)?"B":(c>=60)?"c":(c>=45)?"D":"F";
console.log(score);
/*
output:-
c
*/

/*
5)Temperature Check: Declare a variable temperature and 
 use nested ternary operators to categorize it as "Hot" (above 30),
  "Warm" (20-30), "Cool" (10-19), and "Cold" (below 10). 
  Log the result.
*/
var Hot=19;
var weather = (Hot>=30)?"Hot":(Hot>=20)?"warm":(Hot>10)?"cool":"cold";
console.log(`The temperature is ${Hot}c -> ${weather}`);
/*
output:-
The temperature is 19c -> cool
*/

/*
6)Age Group: Declare a variable age and use the ternary operator to classify the age into 
"Child" (0-12), "Teen" (13-19), "Adult" (20-64), 
and "Senior" (65 and above). Log the result.
*/

var age =50;
var person=(age<=12)?"Child":(age<=19)?"Teen":(age<=64)?"Adult":"Senior";
console.log(`age ${age} ${person}`);
/*
output:-
age 50  Adult
*/


/*
7)What will the following code output?
*/
let x = 10;
let y = "10";
console.log(x == y);
/*
output:-
1010
*/


/*
8)What does the typeof operator return when used with null?
*/
let i=null;
console.log(typeof i);
/*
output:-
object
*/

/*
9)How do you write a function in JavaScript that returns the square of a number?
*/
function square(){
  return "Hello";

}
console.log(square());


/*
10)Write a JavaScript function that checks if a number is even or odd using a ternary operator.
*/
function there(){
  var a=7;
  let ev=(a%2==0)?"even":"odd";
  console.log(ev);
}
there();
/*
output:-
odd
*/


/*
11)What is the result of the expression 5 > 3 && 2 < 4?
*/
var l=5;
var m=4;
console.log(l>3 && 2<m);
/*
output:-
true
*/


/*
12)What’s the difference between == and !=?
*/
var n=10;
var o=10;
console.log(n==o);
console.log(n!=o);
console.log(n==o+5);
/*
output:-
true
false
*/
































