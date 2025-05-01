//syntax for creating a class
class cars {
  constructor() {}
} // this is hw we can create classes in javascript

// using a class to create objects
class car {
  constructor(name, driver) {
    this.name = name;
    this.driver = driver;
  }
}
// creating an object
const car1 = new car("ford", "sharif");
const car2 = new car("benz", "sharifah");
console.log(car2.driver);

// class methods

class me {
  constructor(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
  }
  realAge() {
    return this.age - 2002;
  }
}

// the new objects
const me1 = new me("sharif", "kampala", 2025);
console.log(me1.realAge()); // returns the current age of sharif
