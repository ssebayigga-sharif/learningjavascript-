//the this key word

const country = {
  name: "Uganda",
  population: 2324,
  president: "sharif",
  learder: function () {
    return this.president + " is the president of " + this.name; // this is the function methed
  },
}; //in javscript the this keyword refers to the object probably this stands for country in the method above
console.log(country.learder());

// this alone
let c = this;
console.log(c); //refers to an object( a global object)

//using the call method
const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// person 2
const person2 = {
  firstName: "kamoga",
  lastName: "shafic",
};

// our fullname of person1 is
let answer = person1.fullName.call(person2);
console.log(answer); //returns the fullname of person1 using person two property values

// borrowing functions using the blind method

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member); //replaces person fullname with member fullname
console.log(fullName()); //returns the fullname of member
