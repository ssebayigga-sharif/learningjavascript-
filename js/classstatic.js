//using the static method in class

class Car {
  constructor(name) {
    this.tell = name;
  }
  static love() {
    return "i love my car";
  }
}

// new object referring to the classs
const myRide = new Car("volvo");
console.log(Car.love()); //this is delt with highly on the class not the new object.

//using the new object in the static method
class Boy {
  constructor(called) {
    this.name = called;
  }
  static hello(h) {
    return "hello " + h.name;
  }
}

//
const myBoy = new Boy("sharif");
console.log(Boy.hello(myBoy)); // this is how we use the static method and the new object in classes
