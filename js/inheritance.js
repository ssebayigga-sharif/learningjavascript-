// class inheritance
class motor {
  constructor(name, color) {
    this.refered = name;
    this.paint = color;
  }
  usedFor() {
    return "they ease long distances"; // this is the method of the motor class
  }
}

// the class to inherit
class Bicycle extends motor {
  constructor(name, type, color, look) {
    super(name, color);
    this.nature = type;
    this.how = look;
  }
  use() {
    return "highly helpfull in exercise"; // this is the method of the inheriting class
  }
}

//referencing to inherit class
let myRide = new Bicycle("wrexha", "yellow");
console.log(myRide.usedFor()); //returns the method of the bicycle class that inherited the motor class

// Getters and Setters
//using a getter first
class Boy {
  constructor(name) {
    this.defined = name;
  }
  get boyName() {
    return this.defined;
  }
  set(me) {
    this.defined = me;
  }
}

//new object for the class
const myBoy = new Boy("kamoga sudais");
console.log(myBoy.boyName); // in this example we were using a getter.

// using setters in  class
class Girl {
  constructor(name) {
    this.called = name;
  }
  get herName() {
    return this.called;
  }
  set herName(h) {
    this.called = h;
  }
}

//referencing to the new object
const myGirl = new Girl("Nalukenge Viola");
//setting
let her = (myGirl.herName = "Nakamya Florence");
console.log(her); // this example uses the setter

// class inheritance
class Van {
  constructor(label) {
    this.name = label;
  }
}
//the class to inherit
class Mine extends Van {
  constructor(label, name) {
    super(label, name);
    this.call = name;
  }
}
// the new object referencing to the class

const ride = new Mine("ford");

console.log(ride.name); // returns the value of the name parameter as  persed in the new object

// more about inheritance

class Ball {
  constructor(color, size) {
    this.looking = color;
    this.covers = size;
  }
}

// the  class to inherit the ball class

class newBall extends Ball {
  constructor(color, nature, size, looks) {
    super(color, size);
    this.looks = nature;
    this.exact = looks;
  }
}

// new object referencing to the class
const myBall = new newBall("circular", "green");
console.log(myBall.looks);
