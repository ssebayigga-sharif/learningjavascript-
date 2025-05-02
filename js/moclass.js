//
class Person {
  constructor(name, age, origin, career) {
    this.called = name;
    this.old = age;
    this.comes = origin;
    this.jod = career;
  }
}

//accessing the class
let person1 = new Person("sharif", 22, "muganda", "programer");
console.log(person1.called);
console.log(person1.comes);
console.log(person1.jod);
console.log(person1.old);
console.log(person1);
// variable person2 referencing to the class person
let person2 = new Person("kawiso", 23, "musoga", "unknown");
console.log(person2.called);
console.log(person2.comes);
console.log(person2.jod);
console.log(person2.old);
console.log(person2);
// the variable three referencing to the class person
let person3 = new Person("mosess", 12, "muganda", "baller");
console.log(person3.called);
console.log(person3.comes);
console.log(person3.jod);
console.log(person3.old);
console.log(person3);

//class animal
class Animal {
  constructor(name, color, legs, falls) {
    this.knownAs = name;
    this.looks = color;
    this.uses = legs;
    this.type = falls;
  }
  eats() {
    console.log(
      "some animals feed on grass while others feed on fresh meat like",
      this.knownAs
    );
  }
  nature() {
    console.log("we have domestic and wild animals like", this.knownAs);
  }
}

// referencing to the class animal
let animal1 = new Animal("lion", "brown", 4, "wild");
console.log(animal1); // returns the properties and property values of the animal1
console.log(animal1.eats()); // returns the properties and property values of the animal1
console.log(animal1.nature()); // returns the properties and property values of the animal1

//class mdel

class School {
  constructor(name, students) {
    this.called = name;
    this.population = students;
  }
  total() {
    return "we have both girls and boys";
  }
}
//class jail to inherit class school

class Jail extends School {
  constructor(name, thief, students, murderer) {
    super(name, students);
    this.criminals = thief;

    this.typicalCriminal = murderer;
  }
  totalCriminals() {
    return "we have different kinds of criminals here";
  }
}
//referencing to the class

let result = new Jail("peter", "simon");
console.log(result.criminals);
