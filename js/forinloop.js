//returns the properties of an object
const cars = {
  name: "volvo",
  wheels: 4,
  driver: "sharif",
  road: "hoima",
};
for (let c in cars) {
  console.log(c);
  //console.log(cars[c]);
}

//the for in over array
const boys = ["elijah", "abdul", "shakur", "sharif", "john"];
for (let b in boys) {
  console.log(b + " " + boys[b]);
}

//the array for each method
let empty = [];
const mums = [2, 4, 5, 6, 7, 8, 9, 0];
let each = mums.forEach(find);

function find(value) {
  mums.push(value * 2);
}
console.log(mums);

//value > 6 * 10 && val <= 6 * 5
let blank = [];
const numberss = [3, 4, 6, 5, 10, 40, 60, 57];
let them = numberss.forEach(complicated);

function complicated(value) {
  if (value > 6) {
    blank.push(value * 10);
  } else if (value <= 6) {
    blank.push(value * 5);
  } else {
    blank.push(value * 0);
  }
}
console.log(blank);

// the for of loop

// looping through a string
const names = `sharif `;
for (let n of names) {
  console.log(n);
}

//looping through an array
const bees = ["honey", "pollinator", "destroyer"];
for (let b of bees) {
  console.log(b);
}
