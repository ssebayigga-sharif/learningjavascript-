// we create variables using three key words
// the var keyword
var me = "sharif rollins";
//console.log(me); // variables declared with the var key word can be re assigned
//re assigning a variable
me = 78; //variable me has been re assigned
console.log(me);

//using the let keyword
let come = "kamoga has to come to town today";
//console.log(come);
come = 45; // variables declared with the let keyword can be re assigned
console.log(come);

// using the const keyword
const around = "she must be here";
console.log(around); // variables with the const keyword can not be re assigned

// an array created with the const keyword
const myArray = [2, 3, 4, 5, 6, 7, 8];
console.log(myArray); //the name of the can not be changed buh the values can be changed

// block scope with the let
{
  let kam = "kamoga";
  console.log(kam); //can only accessed within  this block
}

//block scope with var keyword
{
  var go = "go and buy me some snacks";
}
console.log(go); // can be accessed within and outside the block

// block scope with the const keyword
{
  const sharif = "the elder son of him";
  console.log(sharif); // can only be accessed within the block
}
