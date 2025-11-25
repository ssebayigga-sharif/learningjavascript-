//no side effects
const myArr = [1, 2, 3, 4, 5, 6];
function removeLastItem(ya) {
  const newArray = [].concat(ya);
  newArray.pop();
  return newArray;
}
function multiplyByTwo(ya) {
  return ya.map((item) => {
    return item * 4;
  });
}
const arr1 = removeLastItem(myArr);

const arr2 = multiplyByTwo(myArr);
console.log(myArr, arr1, arr2);
// no side effects
function myCount(num1, num2) {
  return num1 + num2;
}
function herCount(num) {
  return num * 2;
}
console.log(herCount(myCount(2, 4)));

//indempotence ( making code predictable)
function inde(num) {
  return num;
}
console.log(inde(8));

//imperative vs declarative
for (let i = 0; i < 20; i++) {
  console.log(i); //imperative code tells  the computer what to do and how tto do it
}

//declarative
const thet = [2, 3, 4, 5, 6];
thet.forEach((item) => console.log("my array " + item)); //imperative code tells the comuter what to do and
// what should happen

//immutability

const obj = { name: "sherrif" };
function clone(obj) {
  return { ...obj };
}
// console.log(obj.name);
// console.log((obj.name = "Sharitech")); //this is mutating data or changing data

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "Nana";
  return obj2;
}
const updatedName = updateName();
console.log(obj, updatedName);

//Higher Order Functions
//functions that either return a function oor take a function as one of the arguments

const it = () => () => 89;
console.log(it()()); //returns a function

// closures

function start() {
  let count = 0;
  return function increment() {
    return count++;
  };
}
let myStart = start();
console.log(myStart());
console.log(myStart());
console.log(myStart());

//currying
//making the function take only one parameter

const curry5 = (a) => (b) => a * b;
//console.log(curry5(2)(10));
const myFirstOne = curry5(5);

//20 years later

console.log(myFirstOne(20));

// let mySecondOne = curry5(8); //parameter changeable as you prefer
// console.log(mySecondOne);

//partial application
//takes one argument at a time and thentake the rest at once
const jovan = (a, b, c) => a * b * c;
const partialJovan = jovan.bind(null, 9);
console.log(partialJovan(2, 1));

//caching

//to avoid repitition we memoise or store data in the catch

function catchs(sharif) {
  console.log("sharitech");
  return sharif + 20;
}

function addToCatchs() {
  let catche = {};
  return function (sharif) {
    //making catching more dynamic and easy  using closures
    if (sharif in catche) {
      return catche[sharif];
    } else {
      console.log("my name ");
      catche[sharif] = sharif + 20;
      return catche[sharif];
    }
  };
}

const memoized = addToCatchs();
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(4));
console.log(memoized(4));
console.log(memoized(4));
console.log(memoized(4)); //memoizatin is a way to remember a solution to solve a problem

// compose
//is system designed principal  that deals with the relationship between components

const compose = (f, g) => (data) => f(g(data)); // f representes multiplyBy3 and g represents makePositive
const multiplyBy3 = (num) => num * 3; //this multiplies the number by three
const makePositive = (num) => Math.abs(num); //this makes the number positive
const multiply3AndAbsolute = compose(multiplyBy3, makePositive);
console.log(multiply3AndAbsolute(-100));

//0707838477
// arity
//simply means the number of arguments a function takes
//and it is more advisable to use few parameters and arguments for easy implememntation and readability
