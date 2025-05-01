//

const person = {
  firstName: "sharif",
  lastName: "kamoga",
  age: 22,
  nationality: "Ugandan",
  city: "kampala",
};
console.log(person.city);
console.log(person);
//destructuring

let { age, city } = person;
console.log(age); //returns the value of the age property of the person object

//can also be used to add properties to the object

let { lastName, firstName, time = "24" } = person;
console.log(time); //returns the value of time in the person object

// another format
let { lastName: yes } = person;
console.log(yes); //returns the value of the last name property

// destructuring strings
const her = "samantha";

//destructuring the string
let [b1, b2, b3, b4, b5, b6] = her;
console.log(b1); //returns acharacter at each index

//destructuring an array
const eat = ["apples", "lemon", "orange"];

//destructuring the array

let [k1, k2, k3] = eat;
console.log(k2); //returns lemon at 2 in the length count

//destructuring can be used to skip elements in an array using a coma

let [g1, , g2] = eat;
console.log(g2); //returns orange

//using the index of array elements
let carss = ["volvo", "kia", "krester", "corona"];

//destructuring
let { [0]: drive, [1]: drive2 } = carss;
console.log(drive);

//the rest property
const count = [2, 4, 6, 8, 10, 12, 14, 16];
//destructuring
let [a, b, c, ...rest] = count;
console.log(rest); //returns all the remaining elements of an array

//destructuring maps

const myMap = new Map([
  ["oranges", 200],
  ["apples", 400],
  ["lemons", 600],
  ["pineapples", 800],
  ["kiwi", 1000],
]);
let collection = " ";
for (let [key, value] of myMap) {
  collection += key + " are " + value + ",   ";
}
console.log(collection);

//swapping or interchanging variables
let hisName = "sharif";
let herName = "sharifah";

//destructuring
[hisName, herName] = [herName, hisName];

console.log(hisName + " " + herName); //returns hername first because of the destructuring
