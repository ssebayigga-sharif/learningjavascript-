// my class
class Parent {
  constructor(name, age, origin) {
    this.called = name;
    this.old = age;
    this.comeFrom = origin;
  }
  clean() {
    return this.called + "is sweeping the compuond today";
  }
  head() {
    console.log(this.called + "heads the home");
  }
}

// class mom to inherit class parents
class Parents extends Parent {
  constructor(name, identity, age, old, origin, stays) {
    super(name, age, origin);
    this.called = identity;
    this.years = old;
    this.lives = stays;
  }
  cook() {
    console.log(this.called + "prepares food daily");
  }
  residence() {
    console.log(this.called + "comes from" + this.lives);
  }
}

//new object referencing to the class parents
const mom = new Parents("nabukeera", 94, "wakiso");
console.log(mom.old);
