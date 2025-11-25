console.info("sharif");
console.error("sharif");

//loops
//for loop
const myCount = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen"];
for (let i = 0; i < myCount.length; i++) {
  console.log(myCount[i]);
}

//while loop
// let count = 20;
// while (count > 0) {
//   console.log(count);
//   count++;
// }

//the do loop
const members = [
  "sharif",
  "sharifah",
  "shafic",
  "shamirah",
  "shakirah",
  "sherrif",
  "shamim",
];

const animals = ["cat", "dog", "Rabbit", "sheep"];

//using the foreach loop
function mem(me, it) {
  console.log(me, it);
}
members.forEach(mem);
console.log("it can be used to loop through morethan one array");
animals.forEach(mem);
