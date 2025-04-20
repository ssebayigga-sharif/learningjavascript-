//math.random
console.log(Math.random());//always return anumber less than 1

// math.floor and random return random integers
const them = Math.floor(Math.random() * 12);//returns a random integer from 0 to 11
console.log(them);

// math.floor and random return random integers
const that = Math.floor(Math.random() * 12) + 2;//returns a random integer from 0 to 13
console.log(that);

//the proper random integer

function myInteger(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
};
myInteger(8,2);
console.log(myInteger());