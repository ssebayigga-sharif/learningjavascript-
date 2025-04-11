//my first javascript function
function myFunction() {
  console.log('i am soon becoming a developer');
}
myFunction();
//declaring functions with parameters
function eat (l) {
console.log('i like eating' ,l, 'drinking');
}
eat('while')
//multiplication
function multiply(l , n){
  console.log(l * n);
}
multiply(23,24)
//addition
function add (h , r) {
  console.log(r + h);
}
add(5 , 6);
//subtraction
function subtract (b , m) {
  console.log(m - b);
}
subtract(5 , 8);
//division
function divide (g  , l) {
console.log(g / l);
}
divide(3000 , 15);
//modulus
function remainder (k , u) {
  console.log(k % u);
}
remainder(7 , 2);
//exponential
function exponent (y , f) {
  console.log(y ** f);
}
exponent(6 , 8);
//adding strings
function strings (h , k , l , f) {
  console.log ('that',h, 'is',k, 'to be',l, 'by',f,);
}
strings('man' , 'going', 'here' ,'afternoon');
//function syntax
/*{
starts with the function keyword
followed by the function name
then parentheses(may include parameters)
then curly braces (these include code to be executed)
ie
function name ( parameters){
//code to be executed
}//name(arguments)
}*/
//function return
let r = addition(6 , 256);
console.log(r);

function addition (h , k) {
  return (h + k);
}
//example two using return

console.log(g);
function sub(k , l){
  return (k - l);
  let g = sub(9 , 6);
}
//example three
let o = multipl(65 , 76);
console.log(o);
function multipl(g , p) {
  return (g * p);
}
//variables used as functions

//let k = "amad is " + v + "years old";
//console.log(k);
//function adds (o , f) {
 // return (8 + 13);
//}
//local variabes
/*these are variables created within afunction and recognized inside their function
and they can only be accessed within that function
variables with the same name can be used in different functions
becos these variables are created when the function starts and deleted when the function is completed
 */
let text = "Outside: " + typeof carName;
console.log(text);

function myFunction() {
  let carName = "Volvo";
  let text = "Inside: " + typeof carName + " " + carName; 
  console.log(text);
}

myFunction();
// my local variable
function car() {
  let g = 'coming';
  let outcome = "aside:" + typeof g + " " + g ;
  console.log(outcome);
}
car();
//my second local variable
function girl () {
  let r = 23;
  let age = "outside:" + typeof r + " " + r ;
  console.log(age);
}
girl();
//my third local variable showing that they are only accessed within function
let y = "unlike:" + typeof kam ;
console.log(y);
function them () {
  let kam = [8, 7, 6, 4, 6,];
  let y = "like:" + typeof kam + " " + kam ;
  console.log(y);
}
them();
