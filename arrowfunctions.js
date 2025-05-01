//they enable us write shorter function syntax

let count = (a, b) => a * b; // shortest way to write functions in javascript
count(2, 6);
console.log(count(2, 6));

//before arrow syntax is

hello = function () {
  return "hello world";
};
hello();
console.log(hello()); //returns the code in the function

// with the arrow

hello = () => {
  return "hello sharif";
}; // this is another syntax for writing arrow functions
hello();
console.log(hello());

// else
hello = () => "hello javascript"; //it works best when the function has only one statements
hello();
console.log(hello()); // it gets shorter and shorter

//parameters can be put inside parentheses

count = (a, b) => a * b;
count(2, 4);
console.log(count(2, 4)); //this syntax also supports parameters

//with one parameter u can skip the parentheses

views = (h) => Math.pow(h, 5);
views(2);
console.log(views(2)); //it works out effectively
