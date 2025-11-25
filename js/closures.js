function name() {
  return function bee() {
    console.log("Bashiirah");
  };
}
name()();
let me = function () {
  console.log("we will go");
};
me();
// looping through a function
for (i = 0; i < 4; i++) {
  const she = () => {
    console.log("sharif ssebayigga");
  };
  she();
}
//mutiply

function multiplyBy(newNum, digit) {
  return newNum * digit;
}
console.log(multiplyBy(2, 10));
//higher order functions

const multiplying = (num1) => (num2) => num1 * num2;
console.log(multiplying(20)(10)); //dry code , reusable code and flexible

//pillars of javascript (closures as pillar one)

function a() {
  let count1 = 20;
  return function b() {
    let count2 = 30;
    return function c() {
      let count3 = 40;
      return function d() {
        let count4 = 50;
        console.log(`${count4} is > ${count3} > ${count2} > ${count1}`);
      };
    };
  };
}
a()()()();
//example two

const boo = (know) => (is) => (names) => console.log(`${know} ${is} ${names}`);
boo("hello")("my")("friend");

//assignment
function called() {
  let myName = "ssebayigga sharif"; //shows myname after four seconds
  setTimeout(function calling() {
    console.log(myName);
  }, 4000);
}
called();

// exercise
const myCount = [1, 2, 3, 4];
for (let i = 0; i < myCount.length; i++) {
  setTimeout(() => {
    console.log("I am at index " + " " + myCount[i]);
  }, 2000);
}

console.log(myCount);
