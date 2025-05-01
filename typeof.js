//returns the javscript datatype of the variable
let a = "me";
console.log(typeof a); // returns a string

let b = 90;
console.log(typeof b); // returns a number

let c = [3, 4];
console.log(typeof c); // returns an object
console.log(Array.isArray(c)); // returns a boolean true meaning its true

let d = null;
console.log(typeof d); // returns an object

let e = undefined;
console.log(typeof e); // returns an undefined

let f = 5657n;
console.log(typeof f); // returns an bigint

let g = true;
console.log(typeof g); // returns boolean

const person = {
  name: "shakim",
};
console.log(typeof person); // returns object

const myWay = new Map();
console.log(typeof myWay); // returns object

const myCount = new Set();
console.log(typeof myCount); // returns object

let func = function news() {};
console.log(typeof func); //returns a function

let today = new Date();
console.log(typeof today); //returns an abject

// the instance of methodsolves this problem
console.log(today instanceof Date);
console.log(myCount instanceof Set);
console.log(myWay instanceof Map);

let me = NaN;
console.log(typeof me); // returns a number

// type conversion
// converting from one data type to another
// frome a string to a number
let num = Number("34");
console.log(num); //returns the string to a number

let strings = 798;
let yes = strings.toString();
console.log(yes); //returns the string

// date to a number
const m = Number(new Date());
console.log(m); // returns the date in numbers

//booleans to numbers
let fals = Number(false);
console.log(fals); // returns a number

let tru = Number(true);
console.log(tru); //returns a number

let myName = Number("sharif");
console.log(myName); // returns a number NaN;
