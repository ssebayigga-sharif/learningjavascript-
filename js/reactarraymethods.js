// we mainly use the .map() method

const fruits = ["apple", "lemon", "pineapple", "cabbage"];
let result = fruits.map(come);
function come(value) {
  return value + "s"; // returns an array of elements with each element with s at the end
}
console.log(result);

// my next array
const actions = ["com", "eat", "sleep", "go"];

let comes = actions.map(call);
function call(value) {
  return value + "ing"; //the map method deals with carrying out a function on each array element
}

console.log(comes);
