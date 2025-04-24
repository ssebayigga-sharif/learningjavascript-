//loop through an array
const numbers = [3, 4, 5, 6, 7, 8, 9];
let store = ' ';

for (let x of numbers){
    store += x + "      ";
};
console.log(store);
console.log(numbers.length);

//looping through a string
let year = "i was born last year";

let birth = " ";

for (let y of year){
    birth += y + "  ";
};
console.log(birth);
console.log(year.length);

//