//creating a set using the new set method
const john = new Set([2, 4, 5, 6, 7, 8, 9]);
console.log(john); // the set doesnot take the same value morethan once

// an empty set
const empty = new Set();
empty.add(7);
empty.add(6);
empty.add(5);
empty.add(4);
empty.add(3);
empty.add(2);

console.log(empty);

// an empty set of strings
const empt = new Set();
empt.add("black panther");
empt.add("hulk");
empt.add("thor");
empt.add("vision");
empt.add("captain america");
empt.add("iron man");

console.log(empt);
console.log(typeof empt); //sets are objects
//method three
const varia = new Set();

//variables for the setvalues before being added to the set
const a = "a";
const b = "b";
const c = "c";
const d = "d";

//adding the values to the set

varia.add(a);
varia.add(b);
varia.add(c); //if you add equal elements only the first one will be saved
varia.add(d);
console.log(typeof varia);
console.log(varia);

//using a for loop within the set
const letters = new Set(["abell", "cain", "peter"]);
for (let l of letters) {
  console.log(l);
}

// finding the type of sets
console.log(typeof letters); // sets are objects
