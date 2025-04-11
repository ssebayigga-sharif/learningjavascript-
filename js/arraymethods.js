 // array properties and methods 
// the length property
const supers = ["ironman", "hulk", "thor", "vision"];
console.log(supers.length);

// sort method
console.log(supers.sort());
// array loop
const hero = ["superman", "flash", "aquaman", "greenlanter"];
// console.log(hero[0]);
// console.log(hero[1]);
// console.log(hero[2]);
// console.log(hero[3]);    // we do not repeat our selves in programming
// we overcome this using the for loop
let ll = hero.length;
let t = " "
for(let i = 0;i < ll;i++){
t += i + " " + hero[i] + " ";
    console.log(i + " " + hero[i]);
    //console.log(i);
   // console.log(t);
}

let game = Array.isArray(hero);
console.log(game);

//example two
const cars = ["vitz", "prado", "spacio", "lafest", "wish", "fielder", "forester", "sienta"];
// using the for loop
let le = cars.length;
let sharif = " ";
for (let i = 2; i < le; i++){
    sharif += i + " " + cars[i] + " ";
   // console.log(cars[i]);
    //console.log(i);
    //console.log(sharif);
}

// is it an array
let yop = Array.isArray(cars);
console.log(yop);

// example three
const insects = [ "housefly", "butterfly", "bees", "termites", "aunts", "redaunts"];
//console.log(insects);

// looping using the for loop
let store = " ";
let long = insects.length;
for (let i = 0; i < long; i++){
store += i + " " + insects[i] + " ";
//console.log(store);
//console.log(i);
//console.log(long[i]);
};

// number array
const numbers = [1, 2, 3, 4, 5, 6];
let hh = numbers.length ;
for (let i = 0; i < hh; i++){
console.log(numbers[i]);
}

//strings array
const strin = ["cow", "goat", "sheep", "hen", "cock", "chick", "lamb", "calf", "dog", "cat"];
let lon = strin.length;
for (let i = 5; i < lon; i++){
    console.log(strin[i]);
}

// fruits array using a foreach function
const fruits = ["apple", "orange", "mangoe"];
fruits.forEach(eat);
function eat(item){
    console.log("the item is" ,item);
}
// adding an element to my array
fruits.push("lemon");
console.log(fruits);

//adding an element of high index to an array
fruits[5] = "pancakes";
console.log(fruits);

// array with named indexes

const person = [];
person[0] = "sharif",
person[1] = 20,
person[2] = "kampala"
console.log(person.length);
console.log(typeof fruits);

console.log(Array.isArray(fruits));

console.log(person instanceof Array);

// nested arrays and objects
const myArray = [
    "apple",
    "orange",
    "names",
    [{name:"house", type:"bangalo", owner:"suubi"},
        {names:"sharif", age:23},
        {names:"car", type:"ford", color:"red"}
    ]
    
]

// using a  loop to access the
for (let them in myArray){
    console.log(myArray[them][0]);
};


