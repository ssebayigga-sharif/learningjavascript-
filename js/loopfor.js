//the for loop

//write your name five times without repeating your self
// we can use the for loop

for(let i = 0; i < 5; i++){
    console.log("ssebayigga sharif");
};

//print numbers from 0 to 7 without repeating yourself
for(let i = 0; i < 8; i++){
    console.log("the number is",i);
};

//the first expression can be ommitted

let i = 0;
for(;i < 8; i++){
console.log("digit is", i);
};

//looping through an array

const myarray = ["volvo", "wish", "lafesta", "prado"];
let cars = " ";
for(let i = 0; i < myarray.length; i++){
    cars += myarray[i] + " ";
};
console.log(cars);

// print only even numbers
let even = ' ';
for(let i = 2; i < 20; i = i + 2){
    even += i + " , ";
};
console.log(even);

// odd numbers
let odd = ' ';
for (let o = 1; o < 20; o = o + 2){
    odd += o + " , ";
};
console.log(odd);