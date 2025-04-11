// indexof method
const legumes = ["beans", "soya", "peas", "lentils"];
let store = legumes.indexOf("peas");  // returns the index of the persed element of an array
console.log( 'index of peas' ,store);

// lastindexof() method
const fruits = ["mangoes", "apples", "oranges", "pineapples", "apples", "mangoes"];
let it = fruits.lastIndexOf("apples");// used when an array has morethan one 
// similar element and when u want to print out the last element
console.log("last index of apples",it);


//array includes method
let yes = (fruits.includes("oranges"));  // returns a boolean true or false
console.log(" doesmyarray includes oranges", yes);
let no = (fruits.includes("tree"));  // returns a boolean true or false
console.log(" does myarray include tree", no)


// the find method
const numbers = [23, 24, 25, 27, 29, 30, 123, 234, 235];
let ans = numbers.find (sharfi);

function sharfi(num, index, array){
    return num >56;
}
console.log('the find of the number in the array greter than 56 is' ,ans);
const they = ["goats", "cows", "people"];
let myAns = they.find(harif);
function harif(value, index, array){
    return value.length > 4;//returns the value with length greaterthan four
}
console.log('value with length greater than 4 is ',myAns);
//findlast method

const temperature = [12, 34, 46, 78, 98, 99, 655];
let newTemperature = temperature.findLast(arrows);//returns the last element in the array lessthan 98 
function arrows(value, index, array) {
    return value > 12;
}
console.log(newTemperature);

// findlastindex
const temp = [21, 22, 23, 24, 25, 26, 27, 28, 12];
let newTemp = temp.findLastIndex(meee);//returns the index of the last element in the array greater than 25
function  meee (value, index, array){
    return value > 27;
}
console.log('last index of temp greater than 27 is ',newTemp);


const choco = ["white","black","dark","brown","green"]

let results = choco.find(myFunction)

function myFunction(value, index, array){

return value.length > 2;

}

console.log(results);


// findindex method
const animals = ["sheep", "goat", "cow", "cat", "dog"];
let result = animals.findIndex(myFunction);

function myFunction(value, index, array){
    return value == "cow";
};
console.log('the findindex of animal equal to cow is ',result);

// example three
const arrayz = ["volvo", "4matic", "legacy", "ford", "outlander"];

let usedFunction = arrayz.findIndex(usingfunction);

function usingfunction(value, index, array){
    return value.length == 4;
}
console.log(usedFunction);

// using the find method
const tonny = ["mom", "dad", "sis", "bro", "jaja", "village"];
let res = tonny.find(sherrif);

function sherrif (value, index, array){
    return index == 2;
}

console.log(res);