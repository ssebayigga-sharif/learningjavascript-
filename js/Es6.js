//let and const key words
const hisName = "ssentongo meddy"; //cannot be re assigned or redecleared
// console.log(hisName);
// hisName = true; //this thrws an error
console.log(hisName);
let guard = false; //can be re assigned
// console.log(guard);
guard = true;
console.log(guard); //changes from false to true
let herName = "sharon mwesigwa";

//destructuring
const person = {
  name: "sharif sseba",
  age: 23,
  city: "kampala",
  country: "Uganda",
};
const { name, city, country } = person;
let { age } = person;
console.log(age);
let names = "john smith";
const obj = {
  [names]: "hello you",
  [2 * 2]: "multi",
};
console.log(obj);

// template strings
let expression = `${names} will be making ${age + 6} years next month`;
console.log(expression);

//default arguments
function sharif(name = "Sudaisi", age = 40, city = "kampala") {
  return `${name} lives in ${city} and is making ${age} years next month`;
}

console.log(sharif());
console.log(sharif("kamoga", 12, "Nairobi"));
//arrays
const count = [2, 4, 6, 8, 10];
console.log(count);

//symbol

let sym1 = Symbol();
let sym2 = Symbol("boo");
let sym3 = Symbol("boo");
let compare = sym2 === sym3;
console.log(compare);

//lastly arrow functions

function plus(a, b) {
  return a + b;
}
console.log(plus(22, 24));

//the same with an arrow  function
const plus1 = (a, b) => a + b;
console.log(plus(22, 24));

//advanced functions

//closures or nesting functions

function come() {
  let a = "come first";
  return function g0() {
    let b = "go first";
    return "they taught us";
  };
}
console.log(come()()); //the inner or child function remembers the variable of its parent function

//currying
//this is making a function take one parameter instead of two

const twoo = (a, b) => a + b;

const onee = (a) => (b) => a + b;

console.log(onee(5)(5)); //here it is the second function that remembers the first one

//compose as the last one here
const compose = (a, b) => (k) => a(b(k));
let multiply = (num) => num * 2;
console.log(compose(multiply, multiply)(2));

//advanced arrays

const myAra = [2, 4, 6, 8];
let timesTwo = [];
myAra.forEach((num) => {
  timesTwo.push(num + 2);
});
console.log(timesTwo); //the forEach method returns a new array of added elements

//for the advanced arrays we shall be using these three methods
// the map()
// the reduce()
//the filter()
//these will be the most common used methods used in javascript

//instead of the forEach we should always use the map method
let sha = myAra.map((nun) => nun + 2);
console.log("mapped", sha); //the map is always better and is more advised the foreach method

// still we can filter our array
let filteredArray = myAra.filter((num) => num < 7);
console.log("filtered", filteredArray);

// the most powerful one is the reduce method of arrays

let reducedArray = myAra.reduce((accumulator, num) => {
  return accumulator + num;
}, 10);
console.log("accumulated", reducedArray);

//advanced objects in javascript
//referencing
let obje1 = { value: 10 };
let obje2 = obje1;
let obje3 = { value: 10 };
console.log(obje1 === obje2); // returns true because they refer to the same object
console.log(obje3 === obje2); //returns false becaus these objects are totally different

//context

//instantiation

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  //we put here our methods or actions the player can do
  introduce() {
    return `I am ${this.name}, I am a ${this.type}`;
  }
}
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    return `WEEEEEE I am a ${this.type}`;
  }
}
const wizard1 = new Wizard("Shelly", "healer");
const wizard2 = new Wizard("Jacob", "dark magic");
console.log(wizard1.introduce());
console.log(wizard2.introduce());

//context
console.log(this.window);
function k() {
  console.log(this);
}
k();
//still context
const objec = {
  g: function () {
    console.log(this);
  },
};
console.log(objec.g());

//Es7
//added two methods
//includes method

let l = "hello";
let ll = l.includes("o");
console.log(ll);
//on arrays
const pets = ["dog", "cat", "bat"];
let ppets = pets.includes("cat");
console.log(ppets);

//the exponential method

function square(c) {
  return c ** 2;
}
let it = square(16);
console.log(it);

function cube(p) {
  return p ** 3;
}
let t = cube(3);
console.log(t);

//Es8

//padstart
let aa = "hello";
let aaa = aa.padStart(6);
console.log(aaa);
//padend
let bb = "hello";
let bbb = bb.padEnd(6);
console.log(bbb);

const te = (a, b, c) => {
  return a + b + c;
};
let le = te(2, 2, 2);
console.log(le);

//object.values
//object.entries
//object.keys to loop through objects

const my = {
  username0: "santa",
  username1: "shelly",
  username2: "sally",
  username3: "mally",
};

let loo = Object.entries(my).forEach((values) => {
  console.log(values);
});

let lloo = Object.entries(my).map((value) => {
  return value[1] + value[0].replace("username", "");
});
console.log(lloo);

//loops again
//for of
//for in
const fruits = ["Apple", "Orange", "Lemon", "Pear", "Banana"];
for (item of fruits) {
  //returns the array items
  console.log(item);
}
for (item in fruits) {
  //returns the index of each array item
  console.log(item);
}

//enumerating objects

const myBasket = {
  apple: 5,
  orange: 20,
  lemon: 30,
};
for (item in myBasket) {
  //returns the properties of an object

  console.log(item);
}
