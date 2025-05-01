//executes code in the block as long as the condition is true
let i = 0;
while (i < 12) {
  //the condition to follow when looping through the block
  console.log("this car is ", i++);
}

// example two of the while loop
let c = 0;
while (c < 5) {
  // the rules the loop has to follow when executing
  c++;
  console.log("ssebayigga sharif");
}

//using a for loop to printout the same output
for (let f = 5; f > 0; f--) {
  //the condition or the instructions the loop has to follow when executing
  console.log("mirembe esther");
}

// the do while loop;
let p = 10;
do {
  // the do while loop loops for atleast one round before the condition
  p--;
  console.log("are you ready for the count", p);
} while (p > 0); //the condition to be followed by the loop

// example two of the do while loop
let send = 0;
//this loop executes the first round without reaching the condition;
do {
  send++;
  console.log("mubiru Abdul");
} while (send < 5);

//comparing the forloop and the while loop
//using the for loop to collect items in an array
const cars = ["BMW", "volvo", "ford", "kia", "legacy", "subaru"];
for (let i = 0; cars[i]; i++) {
  console.log(cars[i]);
}

//using the while loop to collect the items in an array
const heroes = ["batman", "ironman", "superman", "flash", "greenlantern"];
let o = 0;
//the while loop
while (o < heroes.length) {
  console.log(heroes[o]);
  o++;
}
