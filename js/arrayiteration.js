// using the foreach method
let store = [];
const numbers = [2, 4, 6, 8, 10];
let double = numbers.forEach(use);
// calling my function
function use(value, index, array) {
store.push(value * 2);
};
console.log(store);



// using the array map method
const nums = [22, 44, 66, 88, 100];
let ans = nums.map(thiss);
//the funcion to call tthe method
function thiss (value, index, array) {
return value * 4;
};
console.log(ans);

const kids = ["sham", "shan", "kim", "kam", "shif"];
let maap = kids.map(mapped);
function mapped(value) {
    return value.length >3;
};
console.log(maap);


// the flatmap
const subArrays = [2,4,  6 , 22, 44];
let flat = subArrays.flatMap(flaten);
function flaten(value){
    return value * 4;
};
console.log(flat);

const grass = ["grasshopper", "aunts", "whiteaunts", "greenaunts"];
let what = grass.flatMap(flatt);
function flatt(value) {
    return value.length <6;
};
console.log(what);



//the filter method
const strings = ["posh", "pineapple", "prados", "lafesta", "angello"];
let anss = strings.filter(fitered);// returns anew array of elements that pass a condition
// the function to run the mehod
function fitered (value) {
    return value.length > 5;
};
console.log(anss);
//fitering booleans
const boooleans = [7 > 8, 5 == "5", 7 === 7, "string" === "string", 6 + 5 === 5 + 5];
let fil = boooleans.filter(booo);
function booo(value) {
    return value === true;
};
console.log(fil);



//the reduce method
const numms = [20, 30, 40, 50, 60, 70, 80, 90];//returns the total of the 
// elements in the array basing on the operator
let ass = numms.reduce(sh, );
//the sh function
function sh(total, value, index, array) {
    return total + value;
};
console.log(ass);

const write = ["what"," ", "is"," ", "your"," ", "name"];
let keep = write.reduce(one);
function one(total,value){
    return total + value;
}
console.log(keep);
//the reduceright
const numm = [ 20, 30, 40, 50 ,60, 70, 80, 90];
let asss = numm.reduceRight(hs, );
//the hs function
function hs (total, value, index, array) {
    return total + value;
};
console.log(asss);



//the array even method
const even = ["posh", "lafesta", "prado", "spacio", "landcruiser"];
let long = even.every(cars);// the method returns a boolean value true || false
//checks whether an array pases a test function
//the cars function
function cars(value) {
    return value.length < 3;
};
console.log(long);



//the array some method
const arrays = ["sharif", "sharifah", "shamirah", "shafik", "shakur"];
let stored = arrays.some(called);//the method returns a boolean value;
//the called function
//checks whether some elements of an array pass the test function;
function called(value) {
    return value.length == 6;
};
console.log(stored);



//the array from method
const ling = " my name is sharif";// returns an array from the string
let lon = Array.from(ling);
console.log(lon);



//the array keys method
const eats = ["apple", "oranges", "pineapples", "mangoes", "lemon"];
let key = eats.keys();
//we use the for loop
for (let k of eats){
    console.log(k); //returns the index of the array elements
};



//the array with method
const months = ["aug" ,"september", "oct", "nov", "dec"];
let newMonth = months.with (1, "sept");// at index 1 sept replaces september
console.log(newMonth);// returns a new array with the new element at the index persed as the first parameter



// the array spread method
const boys = ["abdul", "kim", "hamim", "shanir"];
const girls = ["alisha", "kemisha"];
//returns all the arrays joined into one
const people = [...boys, ...girls];
console.log(people);



//the array entries method
const birds = ["pigeon", "dove", "hen", "cock", "duck"];
let meee = birds.entries();
for (let b of meee){
    console.log(b);
};