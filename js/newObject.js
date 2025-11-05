// creating an object literal
const person = {
  name: " sharif",
  age: 22,
  city: "kampala",
  country: "Uganda",
};
console.log(person);
// an object using the new keyword
const car = new Object({ name: "volvo", wheels: 4, driver: "sharif" });
console.log(car);

// the object.create method which creates an object from an existing object

const bird = {
  name: "dove ",
  color: "red",
  legs: 2,
};
// using the object.create
const animal = Object.create(bird);
animal.name = "cow";
console.log(animal);
console.log(bird);

const me = Object.assign(person, car, animal);
console.log(me);

// object constructor used when we are to create many objects which are in the same line eg car objects
function Ride(names, wheels, color, driver, seats) {
  this.called = names;
  this.tyres = wheels;
  this.looks = color;
  this.rider = driver;
  this.places = seats;
}

const myCar = new Ride("volvo", 4, "red", "sharif", 5);
const herCar = new Ride("fit", 4, "black", "Aminah", 5);
const hisCar = new Ride("sienta", 4, "white", "Peter", 5);
console.log(myCar);
console.log(hisCar);
console.log(herCar);

// my constructor
function Boy(name, age, school, village) {
  this.how = name;
  this.old = age;
  this.learn = school;
  this.area = village;
}

// referncing object
const him = new Boy("sharif", 22, "Blessed Junior School", "Kayunga");
console.log(him);

// destructuring objects
const bus = {
  name: "Trinity",
  tyres: 6,
  color: "red",
  driver: "sharif",
};
//destructuring my object
const { name, tyres, color } = bus;
console.log(color);

// we can destructure arrays
const myArray = ["apple", "mangoes", "oranges", "pineapples", "watermelons"];

//destructure it
// in arrays we can skip an element using a comma
const [mme, you, us, them] = myArray;
console.log(us);

// we can also swapp variable values using destructuring
let s = "let him drive";
//console.log(s);
let t = "let her drive";
//console.log(t);

//lets destructure this one and we change the values of s to t and of t to s
[s, t] = [t, s];
console.log(s);

// object prototypes used to add metods and properties to a constructor function

function Baad(name, age, color) {
  this.called = name;
  this.old = age;
  this.color = color;
}

// to add a another property to this constructor we use the object prototype
Baad.prototype.number = 23;

const newBad = new Baad("pigeon", 12, "red");
console.log(newBad.number);

//javascript object methods

//object.assign method

const person1 = {
  firstName: "sharif",
  lastName: "ssebayigga",
  age: 22,
};

//object two
const person2 = {
  firstName: "shakim",
  lastName: "mubiru",
  age: 12,
};

//using the object.assign

Object.assign(person2, person1);
console.log(person2);

//to an array
let Arrayx = Object.entries(person2);
console.log(Arrayx);

// object.values
//console.log(object.values(person2));
const names = {
  car: "volvo",
  bike: "avon",
  ball: "super",
  book: "blue",
};
let thems = Object.getOwnPropertyNames(names);
console.log(thems);
