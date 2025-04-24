//used to loop through an object
const person = {
    name:"sharif",
    age:20,
    city:"kampala",
    car:"volvo"
};
//display the object using the for in loop
let stored = " ";
for(let x in person){
    stored += person[x] + " ,  ";
};
console.log(stored);

// displaying an array
const girls = ["shake", "bash", "sham", "zafa", "hajarah"];

let result = ' ';
for (let g in girls){
    result += girls[g] + "  ,  ";
};
console.log(result);

// //the for each method
// const nums = [2, 3, 4, 5, 6, 7, 8];
// let ans = nums.forEach(shake);

// function shake(value){
//     return value > 0;
// }
// console.log(ans);