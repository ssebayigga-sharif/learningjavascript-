//the iterator loops through the iterable object
const person = "he will be coming back on sunday";
for (let p of person) {
  console.log(p);
}

//iterating through an array of numbers
const numbers = [20, 21, 23, 22, 24, 25];
for (let n of numbers) {
  console.log(n);
}

//iterating through an array of letters
const letters = ["a", "b", "c", "d"];
for (let l of letters) {
  console.log(l);
}

//iterating through a map

const map = new Map([
  ["banana", 200],
  ["apple", 300],
  ["lemon", 400],
]);
for (let m of map) {
  console.log(m);
}
