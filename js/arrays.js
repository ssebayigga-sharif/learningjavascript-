// my first array
const heroes= ["flash", "batman", "superman"];
console.log(heroes);
console.log('the item at index 1 is',heroes[1]);
// array two as an empty array
const trees = [];
trees[0] = 'mahogany',
trees[1] = 'eucalyptus',// elements assigned to the array
trees[2] = 'pine'
console.log(trees);
console.log('the item at index 0 is',trees[0]);
// chnging to strings
console.log(trees.toString());  // changes an array to a string
console.log(typeof trees);
// an array using the new keyword array
const books = new Array("45","champion", "blackbook", "exercise");
console.log(books); // using the new keyword is noy highly recomended
console.log('the item at index 2 is',books[2]);
// changing the element of the array
books[0] = 'picfare';// the element to replace the original one at index 0
// console.log(books);

// // converting an array to string
// console.log(books.toString());  // also converts an array to a string
// console.log(typeof books);
// // my special array
// const list = [9, 2, "sharif", "kamoga",[2, 4, 6], {name:"me", age:24, city:"kampala"}];
// console.log(list); // this shows that an array can contain any type of data
// // the length property can also be used to access the last element of an array
// console.log(supers[supers.length -1]); // returns the last index element of an array

// // the push method
// const superc = ["ironman", "hulk", "thor", "vision"];
// superc.push("captainAmerica");
// console.log(superc);  // adds an element at the end of an array
// // how to create an array
// const points = new Array(22);
// const point = [20]; // both do the same thing in javascript
// console.log(points); //unexpected result not recommended
// console.log(point);

// array nesting
const them = ["kamoga", "shafic", "shakur",["shamirah", "naziifah", "shakirah"]];
console.log(them[3][1]);
//object nested in an array
const cars = ["volvo", "ford", {names:"sharif", age:20, city:"kampala", mom:"zaffalan"}];
console.log(cars[2].age);

const complexArray = [

{
    id: 1,
    name: "John Doe",
    contact: {
      email: "johndoe@example.com",
      phone: "555-1234"
    },
    address: {
      street: "123 Main St",
      city: "Springfield",
      zip: "12345"
    },
    hobbies: ["reading", "swimming", "hiking"],
    orders: [
      {
        orderId: "A123",
        amount: 150.5,
        items: [
          { productId: "P001", name: "Laptop", quantity: 1, price: 1000 },
          { productId: "P002", name: "Mouse", quantity: 1, price: 25.5 }
        ]
      },
      {
        orderId: "B456",
        amount: 50.75,
        items: [
          { productId: "P003", name: "Keyboard", quantity: 1, price: 30.25 },
          { productId: "P004", name: "Headphones", quantity: 1, price: 20.5 }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    contact: {
      email: "janesmith@example.com",
      phone: "555-5678"
    },
    address: {
      street: "456 Oak St",
      city: "Shelbyville",
      zip: "67890"
    },
    hobbies: ["painting", "yoga", "traveling"],
    orders: [
      {
        orderId: "C789",
        amount: 200.0,
        items: [
          { productId: "P005", name: "Smartphone", quantity: 1, price: 200 }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Sam Johnson",
    contact: {
      email: "samjohnson@example.com",
      phone: "555-9101"
    },
    address: {
      street: "789 Pine St",
      city: "Capital City",
      zip: "11223"
    },
    hobbies: ["gaming", "cycling", "movies"],
    orders: [
      {
        orderId: "D101",
        amount: 300.0,
        items: [
          { productId: "P006", name: "Tablet", quantity: 1, price: 300 }
        ]
      }
    ]
  }
];
 

 console.log(complexArray[0].address.zip);
 console.log(complexArray[2].orders[0].items[0].name)



