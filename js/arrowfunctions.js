// arrow functions allow us to  write shorter function syntax
// this is the first way of declaring an arrow function
greet = function () {
  console.log("good morning react");
};
greet(); //here is how we call a function

// example two
drive = function () {
  console.log("he drives lorries every year");
};
drive(); //this is how a function is called

// examle three
myName = function () {
  console.log("ssebayigga sharif");
};
myName(); // this is calling a function

//example four
myMom = function () {
  console.log("nansubuga sharifah");
};
myMom(); // this is how we call  a function

//when the function has one statement it becomes shorter

// method two of creating arrow functions
hello = () => {
  console.log("hello react");
};
hello(); //this method makes it easy to use functions with one satatement

names = () => {
  console.log("wrire down the names of noise makers");
};
names();

// this method with parameters
children = (num) => {
  console.log("she has seven children", num);
};
children(9);

//with one parameter u can even skip the parenthesess

count = (two) => {
  console.log("he has", two, "boy children");
};
count(5);
