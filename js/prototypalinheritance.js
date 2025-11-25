const person = {
  name: "sharif",
  age: 23,
  city: "kampala",
  drive() {
    return `I am ${this.name} the driver of the headteacher`;
  },
  sing() {
    return `${this.name} is really good at singing`;
  },
};
console.log(person.drive());
console.log(person.sing());
//inheritance
const boy = {
  mom: true,
};

boy.__proto__ = person;
console.log(boy.age);

//right way to use prototypal inheritance
const human = {
  mortal: true,
};
console.log(human);
const being = Object.create(human); //makes being to inherit hman object
being.age = 23; //adds the age property to the being object
console.log(being.mortal);
console.log(being);

//about the map method
const myArr = [1, 2, 3, 4, 5, 6];
let result = myArr.map((value) => {
  return value + "##";
});
console.log(result);
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};
new Date().lastYear();
console.log(new Date().lastYear());
