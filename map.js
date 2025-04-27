//how to create a map
// using the new map() method by passing an array

const myFirstMap = new Map([

    ['boys', 200],
    ['girls', 500],
    ['men', 700],
    ['women', 800],
    ['oldWomen', 980],
    ['oldMen', 200]
]
);
console.log(myFirstMap);

//method two of creating a map in javascript

const secondMap = new Map ();

// by using the set() method
secondMap.set ("apples", 900);
secondMap.set ("oranges", 700);
secondMap.set ("bananas", 300);
secondMap.set ("mangoes", 200);
secondMap.set ("lemon", 100);
secondMap.set ("berries", 600);// this method adds these elements to empty map created

console.log(secondMap);

// we can also use the set method to change the key values in the map
secondMap.set ("apples", 200); // this changes the value of apple to 200 from 900
console.log(secondMap);

// the get () method 
let gett = secondMap.get("apples");// this method returns the value of the key

console.log(gett);

// the type of maps is objedt
console.log(typeof secondMap);// returns object

// method two we can use the instance of map

console.log(secondMap instanceof Map);// returns true if its an object and false if its not an object