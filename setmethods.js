//set methods
// the new set method
const mine = new Set([23, 24, 25, 26, 27]);
console.log(mine);

// the add method
mine.add("suubi");
mine.add("elijah"); // adds new elements to the set
mine.add("kitaka");
console.log(mine);

// the has method
let how = mine.has("elijah");
console.log(how); // returns a boolean value true

// the has method
let howc = mine.has("sharif");
console.log(howc); // returns a boolean value false because sharif is not a member of the set

//the foreach method

const check = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
let empt = [];

let checking = check.forEach(created); // this method deals with every element of the set

function created(value) {
  empt.push(value + 2); // returns the elements each increased by two
}
console.log(empt);

// the values method

const chec = new Set([1, 2, 3, 4]);
let emp = chec.values();

for (let c of emp) {
  console.log(c); //  the method returns the values in the set
}

// the entries method
let emps = chec.entries();
for (let e of emps) {
  console.log(e); //  the method returns set values in pairs
}
