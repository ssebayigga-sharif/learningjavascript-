const myArray = [2, 3, 4, 5, 6, 7];

let mapped = myArray.map(called);

function called(value) {
  return value * 2;
}
console.log(mapped);

let x = myArray.map((value)=> value * 4 )