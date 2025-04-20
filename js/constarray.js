//highly advisable to use the const key word
const cars = ["posh", "volvo", "prado", "lafesta"];
console.log(cars);
//can not re assign an array
// cars = ["posh", "volvo", "prado", "lafesta"];
// console.log(cars[0])


//we can add new elements to an array
cars[0] = "ford";
// even we can use more methods such as 
cars.push("sienta");
//at the same time we can reduce the elements in an array
cars.pop();
console.log(cars);
//block scope
const fruits = ["apple", "lemon", "orange", "pineapple"];
// {
//     const fruits = ["potatoes", "irish", "aloe", "tomatoes"];
//     // this array is considered within this block
//     console.log(fruits);

// }
console.log(fruits); // returns the array before the block
 

//block scope
function sharif (){
    const myArray = ["volvo", "mercedes", "lafesta"];
    console.log(myArray);
};
sharif();