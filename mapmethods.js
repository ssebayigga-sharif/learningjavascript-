//the  new map method which adds elements to a map
const cars = new Map([
  ["ford", 20],
  ["subaru", 110],
  ["kia", 10],
  ["volvo", 30], // elements of the map
]);
console.log(cars);

// the get method returns the value of the key in the mapp
// get the value of volvo cars from the cars map

let acquire = cars.get("volvo");
console.log(acquire);

// the set method is used to add elements to a map

let add = cars.set("prado", 30); // adds the prado element to the map
console.log(add);

// the size property returns the number of elements in a map

let big = cars.size; // returns the number of elements in a map
console.log(big);

//the delete method
let reduce = cars.delete("kia"); // removes kia from the map
console.log(cars); //returns the cars map without the kia element

// the clear method
let allOut = cars.clear(); // removes all the elements of the cars map
console.log(cars); // returns the cars map without any element

// the has method
let know = cars.has("kia"); // checks whether this key exists in the map and returns true || false
console.log(know); // returns false because this key was deleted earlier

let knows = cars.has("prado"); // checks whether this key exists in the map and returns true || false
console.log(knows); // returns false because  the map was cleared earlier

// the foreach method

const myMap = new Map([
  ["boys", 20],
  ["men", 10],
  ["girls", 30],
  ["women", 50],
]);
let store = " "; // our out put is in this empty string

let how = myMap.forEach(call);

function call(value, key) {
  store += key + "=" + value + " ";
}
console.log(store);

//the entries method
for (let x of myMap.entries()) {
  console.log(x);
}

// the keys method
for (let k of myMap.keys()) {
  // this method returns only keys without values
  console.log(k);
}

// the values method
for (let v of myMap.values()) {
  console.log(v); // returns the values for the keys
} // this method can be used to get the total of the value

let total = 0;
for (let t of myMap.values()) {
  total += t;
}
console.log(total); // returns the total of the values of the keys of the map

// using objects as map keys
const mangoes = { name: "mangoes" };
const apple = { name: "apple" };
const pineapple = { name: "pineapple" };
const berries = { name: "berries" };

// the newly created map
const fruits = new Map();
//adding keys to the map

fruits.set(mangoes, 200); // this map uses objects as its keys
fruits.set(apple, 900);
fruits.set(pineapple, 600);
fruits.set(berries, 700); // the keys of this map are objects not strings

console.log(fruits);

//the map.group by method

const myArray = [
  { name: "sugar", number: 200 },
  { name: "beans", number: 300 },
  { name: "soya", number: 700 },
  { name: "posho", number: 100 },
  { name: "peas", number: 900 },
];

function getAll({ number }) {
  return number.length < 4 ? "we are not safe" : "we are safe";
}
let result = Map.groupBy(myArray, getAll);
console.log(result);
