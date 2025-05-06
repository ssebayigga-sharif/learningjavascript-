//
hello = () => {
  console.log("hello react");
};
hello();
//
greet = (tell) => {
  console.log("good morning", tell);
};
greet("sharifah");

// the this keyword in arrow functions
class Ride {
  constructor(car, driver) {
    this.carName = car;
    this.driverName = driver;
  }
  whereTo() {
    return this;
  }
}

const myRide = new Ride("volvo", "angello");
console.log(myRide.whereTo());
