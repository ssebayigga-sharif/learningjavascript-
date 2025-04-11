
/*

let person = {
 name:'sharif',
  age:'22',
   city:'kampala',
    phone:'samsung'
    };
console.log(person);
console.log(person.age);
// creating an object with varius rows
const car = {
    name:'spacio',
    color:'white',
    model:'234'
}

// we can access the properties of our object like this
console.log(car);
// we can also access the property value of our object like this
console.log(car.model);
// creating an empty object and then assigning it to properties after.
const person1 = {};
// its properties
person1.name = 'abdul',
person1.age = '12',
person1.city = 'kayunga',
person1.eyecolor = 'red';
// accessing our object properties
console.log(person1);
// accessing the object propertyvalue
console.log(person1.eyecolor)
// defining the object using the new keyword
const food = new Object();
// our object properties
food.name = 'rice' ,
food.color = 'white' ;
// accessing our object properties
console.log(food);
// accessing our property values
console.log(food.name);
// we can also create a copy of an object
const person3 = {name:'shaf', age:'23', city : 'masaka'};
// we can access our object propperties
console.log(person3);
// our object copy
const x = person3;
// we can now access our property values
console.log(x.name);
// we can also access the property values using the bracket notation
console.log(x['age']);
// we can also delete a property
delete x.city;
// we can also add an object into another object or nesting.
const person4 = {
    name:'kul',
age:'34',
city:'kampala',
eyecolor:'yellow',
myCar : {
name:'ford',
color:'red',
model:'234'
}
}
// accessing our object properties using the dot notation.
console.log(person4);
// accessing our object property value using the dot notatio
console.log(person4.eyecolor);
// accessing our nested object using the dot notation
console.log(person4.myCar);
// accessing a nested object property value using dot notation
console.log(person4.myCar.color);
// accessing our object property value using the bracket notation.
console.log(person4['age']);
// accessing our nested object using the bracket notation
console.log(person4['myCar']);
// accessing a nested object property value using bracket notation
console.log(person4['myCar']['model']);

// we can turn an object into a string
JSON.stringify( {name:'shaf', age:'23', city : 'masaka'});


// creating a method

const perso = {
    firstname:'john',
    lastname:'doe' ,
    age : '23',
    car : 'volvo',
    eyecolor :'red',
    fullname :function(){
       return  this.firstname + "  " +  this.lastname ;
    }

}
console.log(perso.fullname());

// example two on methods.

const table = {
    height:'7ft',
    width:'3ft',
    color:'brown',
    legs:'4',
    fullsize:function(){
        return (this.height + "  " + this.width);
    }
}
console.log(table.fullsize());
// example three on methods turning it to uppercase

const boy = {
    firstname:'sharif',
    lastname:'ssebayigga',
    age:'22',
    countryname:'Uganda',
    city:'kampala',
    road:'hoima',
    location:function(){
        return (this.countryname + ' ' + this.city).toUpperCase();
    }
}
console.log(boy.location());
// object display using object.entries().

const fruits = {
    bananas:'20000',
    apples:'600',
    mangoes:'70000',
    grapes:'900000'
}
let text = "";
for (let[fruit , amount] of Object.entries(fruits)){
    text += fruit + " : " + amount + "<br>";
};
console.log( text );

// displaying objects using JSON.stringfy().
const girl = {
    age: 7,
    firstname:'sheila',
    lastname:'awori'
}
// stringfy
let mystring = JSON.stringify(girl);

console.log(mystring);
// stringfy example two
const baby = {
    firstname:'jerry',
    lastname:'kolo',
    mother:'sarah',
    age:2,
    dad:'jonah'
}
// stringfy
let myString = JSON.stringify(baby);
console.log(myString);
// display an object using object . value.

const phone = {
    type:'samsung',
    color:'red',
    maker:'sam'
}
// create an array
const myArray = Object.values(phone);
// displa
console.log(myArray);
// example two

const laptop = {
    type:'dell',
    color:'black',
    user:'sharif'
}
// create an array
const MyArray = Object.values(laptop) ;
// display
console.log(MyArray);

// Object constructors
let People = function(name, age, career, eyecolor){
this . name = name;
this . age = age;
this . career = career;
this . eyecolor = eyecolor;
} 
let john = new People('john',34, 'teacher', 'red');

console.log(john);
let joan = new People('joan', 45, 'nurse', 'yellow' );
console.log(joan);

let trevor = new People('trevor', 13, 'driver', 'reddishbrown');
console.log(trevor);

let moses = new People('moses', 20, 'footballer', 'yellow');
console.log(moses);

let shakirah = new People('shakirah', 23, 'accountant', 'white');
console.log(shakirah);


//a new object
const home = {
    mother : 'zafalan',
father : 'mark',
daughter : 'shakirah',
son : 'abdul'


}

console.log( home.mother );
console.log( home.father );
console.log( home.daughter );
console.log( home.son );
console.log( home );
//another object
const girl = {
    name : 'sharon',
    age : 13,
    weight : 7,
    eyecolor : 'yellow',
    city : 'kampala'
}
console.log( girl );
console.log( girl.name );
console.log( girl.age );
console.log ( girl.weight );
console.log( girl.eyecolor );
console.log( girl.city );
//example three
const man = {
    firstname : 'sharif',
    lastname : 'ssebayigga',
    weight : 59.8,
    age : 22,
    eyecolor : 'red',
    height : 3.8,
    color : 'black',
    occupation : 'none'
}
console.log(man);
console.log(man . age);
console.log(man . color);
console.log(man . eyecolor);
console.log(man . firstname);
console.log(man . height);
console.log(man . lastname);
console.log(man . occupation);
console.log(man . weight);

// numbers
{
    console.log(56 + 45);
}
//strings
{
    console.log("i love football");
    console.log("i hate soccer");
    console.log("i will be agood developer");
}
//arrays
{
    const evenum = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    console.log(evenum);
}
//boleans
{
    let r = 6;
    let g = 7;
    let d = 5;
    console.log(d ===r);
    console.log(d !=g);
}
//function
function cook () {
    console.log('she will be the one cooking');
}
cook();
//objects
const school = {
name:'sherri junior school',
size:'big',
students:1251141,
head:'sharif'
}
console.log(school);
console.log(school.size);
console.log(school.name);
console.log(school.head);
console.log(school.students);

//my country object
let country = {
  name: "Uganda",
  numberOfPeople: 900,
  president: "museveni",
  capitalCity: "kampala",
};
console.log(country.capitalCity);
console.log(country.name);
console.log(country.numberOfPeople);
console.log(country.president);
//object empty and then values
const address = {};

address.country = "uganda";
address.email = "aahari@gmail.com";
console.log(address);
//obje
let car = { name: "kuki", color: "red" };
console.log(car["name"]);
console.log(car["color"]);
//oblect me

const sharif = {
  firstName: "sharif",
  lastName: "ssebayigga",
  yearOfBirth: 2000,
  age: function () {
    return 2025 - this.yearOfBirth;
  },
};
console.log(sharif.age());
//an empty object
const book = {};
book.name = "a4";
book.pages = 700;
book.color = "pink";
book.pageColor = "white";
console.log(book);
console.log(book.color);
//accessing object with[]
const gel = {
  name: "kam",
  age: 65,
  city: "kamp",

  full: function () {
    return this.name + " " + "is" + " " + this.age + " " + "years old";
  },
};
console.log(gel);
console.log(gel["city"]);
console.log(gel["age"]);
console.log(gel["name"]);
console.log(gel.full());
// object method two
const fon = {
  name: "iphone",
  model: "13 promax",
  price: 25000000,
  color: "red",
  screenSize: 67,
  //price of frty iphones
  totalPrice: function () {
    return this.price * 40;
  },
  fullIdent: function () {
    return this.name + " " + this.model;
  },
};
console.log(fon.totalPrice());
console.log(fon.fullIdent());
console.log(fon);
console.log(fon["color"]);
console.log(fon["model"]);
console.log(fon["name"]);
console.log(fon["price"]);
console.log(fon["screenSize"]);
//
{
  const y = 7;
  // y = 8;
  console.log(y);
}
const k = { name: "shafic" };
k.name = "shakul";
console.log(k);

//add a property to an object

const ll = { name: "kill" };
ll.age = 17;
ll["city"] = "kampala";
console.log(ll);
//deleting a property to an object.
const userProfile = {
  userInfo: {
    firstName: "John",

    lastName: "Doe",

    email: "johndoe@example.com",

    address: {
      street: "123 Main St",

      city: "Springfield",

      state: "IL",

      zipCode: "62701",
    },
  },

  preferences: {
    theme: "dark",

    notifications: {
      email: true,

      sms: false,
    },

    language: "en",
  },

  orders: [
    {
      orderId: "1001",

      date: "2025-02-28",

      items: [
        {
          productId: "P001",

          productName: "Laptop",

          quantity: 1,

          price: 1200,
        },

        {
          productId: "P002",

          productName: "Mouse",

          quantity: 1,

          price: 20,
        },
      ],
    },

    {
      orderId: "1002",

      date: "2025-02-15",

      items: [
        {
          productId: "P003",

          productName: "Keyboard",

          quantity: 1,

          price: 50,
        },
      ],
    },
  ],
};

console.log(userProfile.userInfo.firstName);
console.log(userProfile.userInfo.address.zipCode);
console.log(userProfile.preferences.theme);
//methods
const grades = {
  science: 4,
  math: 2,
  english: 6,
  socialStudies: 1,
  finalGrade: function () {
    return this.science + this.math + this.english + this.socialStudies;
  },
};
console.log(grades.finalGrade());
//adding a method
const countri = {
  firstName: "shakim",
  lastName: "ssemuju",
  numberOfPeople: 900,
  president: "museveni",
  capitalCity: "kampala",
};
countri.fullName = function () {
  return this.firstName + this.lastName;
};
console.log(countri.fullName());
//nested object
const person4 = {
  name: "kul",
  age: "34",
  city: "kampala",
  eyecolor: "yellow",
  myCar: {
    name: "ford",
    color: "red",
    model: "234",
  },
};
console.log(person4.myCar.model);
//accessing object using loops

const person = {
  name: "John",

  age: 30,

  city: "New York",
};
console.log(person["name"]);
//for loop
for (let x in person) {
  console.log(person[x]);
}
//accessing object in a loop two
const bee = { type: "honeyBees", number: 12000, location: "kayunga" };
for (let g in bee) {
  console.log(bee[g]);
}
//example three
const van = {color:'yellow',model:2026,driver:'kamoga'}
for(let v in van){
  console.log(van[v]);
}
//examplefour
const phone = {name:'tecno',storage:120,batteryLife:'8hrs',ram:8,screenSize:'16px'}
for (let p in phone){
  console.log(phone[p]);
}*/
//adding a method to an object
/*const industry = {name:'textile',yearsInAction:34,numberOfWorkers:170}
//adding a method
industry.location = function(){
  return 'kayunga-Wakiso';
}
console.log(industry.location());
//example two
const baby = {
  firstName:'abdul',
  lastName:"mubiru",
  age:2,
  city:'kampala',
  //nesting an object
  parents : {
    mother:"zafalan",
    father:"shakim"
  }
}
baby.fullName = function() {
  return (this .firstName + this.lastName) .toUpperCase();
}
for (let b in baby){
  console.log(baby[b]);
}
console.log(baby.parents.mother);
console.log(baby.parents.father);
console.log(baby.fullName());
//displaying an object in aloop
const laptop = {name:'dell',storage:500,ram:8,core:'i3'};
laptop.model = function() {
  return 'windows10';
}
for (let l in laptop) {
  console.log(laptop[l]);
}
console.log(laptop.model());
//school object
const school = {
  Id:'12442112313',
  names:'lubiriSecSchool',
  location:'lungujja'
}
for(let s in school) {
  console.log(s);
  console.log(school[s]);
}
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
  console.log(text);
};
//looping objects
const ball = {
  shape:'round',
color:'white',
cost:20000,
owner:'suubi'
}
let kick = "";
for (let b in ball) {
   kick += ball[b] + " ";
   console.log(kick);
}
//looping objects
const spacio = {
  color:'red',
  tyres:4,
  driver:'angel',
  owner:'him'
}
let drive = " ";
for (let s in spacio) {
  drive += spacio[s] + " ";
  console.log(drive);
};
//looping objects
const jerryCan = {
  size:20,
  color:'yellow',
  owner:'kim'
}
let water = ' ';
for (let j in jerryCan) {
  console.log(jerryCan[j]);
  water += jerryCan[j] + " ";
  console.log(water);
}
//displaying property values in an array

const phone = {
  name:'tecno',
  storage:120,
  batteryLife:'8hrs',
  ram:8,screenSize:'16px'
}
const myArray = Object.values(phone);
console.log(myArray);



//displaying an object in a string
const fon =  {  name: "iphone",
    model: "13 promax",
    price: 25000000,
    color: "red",
    screenSize: 67,}

    let myString = JSON.stringify(fon);

    console.log( myString);



    //displaying an object in a loop using object.entries();
    //this displays the property and its value eg;
    const fruits = {
      banana:80,
      grapes:70,
      apples:60,
      mangoes:40
    }
    //displaying properties and their values in a loop
    let them = ' ';
    for (let [fruit,number] of Object.entries(fruits)){
      them += fruit + " " + number + " ";
      console.log(them);
    }

//displaying an object in a loop
let food = { name: "irish", color: "yello", shape: "circle" };
//using a for loop
for (let f in food) {
  console.log(f);
  console.log(food[f]);
}
//displaying object in aloop in abetter way
const cras = {
  name: "spacio",
  color: "red",
  tyres: 4,
  price: 2000,
};
//using object.entries()
let ans = " ";
for (let [prop, val] of Object.entries(cras)) {
  ans += prop + " " + val + " ";
  console.log(ans);
}
//changing an object into an array
const insect = {
  name: "bee",
  color: "yellow",
  legs: "six",
};
//displaying the object in an array
console.log(Object.values(insect));

//displaying an object in a string
const bag = {
  color: "red",
  name: "laptop",
  handles: 2,
  owner: "meeee",
};
//result in a string
console.log(JSON.stringify(bag));*/
//functin constructor
function Deople(firstName, lastName, age) {
  console.log(firstName + " " + lastName);
}
Deople("sharif", "kalule", 30);
//object function constructor
function Human(firstName, lastName, age, color) {
  this.fname = firstName;
  this.lname = lastName;
  this.age = age;
  this.color = color;
}
//create new objects
let mum = new Human("sharifah", "nalule", 50, "black");
console.log(mum);
let dad = new Human("mark", "kasule", 90, "grey");
console.log(dad);
let aunt = new Human("esther", "nakawooya", 77, "brown");
console.log(aunt);

//object function two
function Car(name, color, tyres, model) {
  this.name = name;
  this.color = color;
  this.tyres = tyres;
  this.model = model;
  this.price = "$20000";
  this.totalColors = function () {
    return this.color;
  };
}
Car.prototype.weight = 5000;

//new car objects
let car1 = new Car("ford", "red", 4, "2027");
car1.driver = "sharif";

let car2 = new Car("wish", "pink", 4, "2030");
console.log(car2);
let car3 = new Car("legacy", "grey", 4, "2026");
console.log("the name of car3 is" + " " + car3.name);
let car4 = new Car("jeep", "white", 4, "2024");
console.log(car4.color);
console.log(car1.price);
console.log(car1.driver);
console.log(car2.weight);
console.log(car1.weight);
let ford = new Car("kkk", "red", 6, "2029");
console.log(ford.weight);
console.log(car1.totalColors());

//adding a method to an object
const tim = {
  pOne: "kamoga",
  pTwo: "sudaisi",
  pThree: "sherrif",
  pFour: "rollins",
  pFive: "kawiso",
};
//addimg a method on an object
tim.allPlayers = function () {
  return (
    this.pOne +
    " " +
    this.pTwo +
    " " +
    this.pThree +
    " " +
    this.pFour +
    " " +
    this.pFive
  );
};
//accessing the values using a loop
let sherri = " ";
for (let [prop, valu] of Object.entries(tim)) {
  sherri += prop + " " + valu + " ";
  console.log(sherri);
}
console.log(JSON.stringify(tim));
console.log(Object.values(tim));
console.log(tim.allPlayers());
//adding a method to a constructor
function Fruitss(name, color, shape, producer) {
  this.name = name;
  this.color = color;
  this.shape = shape;
  this.producer = producer;
}

//adding a method to a constructor

Fruitss.prototype.all = function () {
  return "hello world of fruits !!!";
};
//method two
Fruitss.prototype.added = function () {
  return this.name + " " + this.color;
};

//new objects for the constructor
let fruit1 = new Fruitss("mangoe", "yellow", "oval", "kelvin");
//displaying the object in a loop using object.entries
let anss = " ";
for (let [p, v] of Object.entries(fruit1)) {
  anss += p + " " + v + " ";
  console.log(anss);
}
// another new object turned to a string
let fruit2 = new Fruitss("apple", "green", "circle", "sherrif");
console.log(JSON.stringify(fruit2));

//another new object turned into an array
let fruit3 = new Fruitss("orange", "yellow", "round", "kawiso");
console.log(Object.values(fruit3));
console.log(fruit3.all());
console.log(fruit3.added());

//another new object displayed in aloop
let fruit4 = new Fruitss("banana", "yellow", "none", "shakul");
for (let u in fruit4) {
  console.log(u);
  console.log(fruit4[u]);
}
console.log(fruit4.all());
console.log(fruit4.added());

//accessing the bject by default
let fruit5 = new Fruitss("berry", "purple", "round", "carol");
console.log(fruit5);
console.log(fruit5.all());
console.log(fruit5.added());

//another constructor
function Insect(name, legs, wings, color) {
  this.name = name;
  this.leg = legs;
  this.wing = wings;
  this.color = color;
}
//adding a property too our construtor
Insect.prototype.impo = "none";
//adding a method to our constructor
Insect.prototype.totalInsects = function(){
  return inse1.name + " " + inse2.name + " " + inse3.name + " " + inse4.name;
}
//new objects for the constructor
const inse1 = new Insect("butterfly",8, 2, "yellow");
const inse2 = new Insect("cockroach", 8, 2, "yellow");
const inse3 = new Insect("housefly", 8, 2, "blue");
const inse4 = new Insect("wasp", 8, 2, "black");
//accessing our new objectin a loop
console.log(Object.entries(inse1));
let L = " ";
for(let[properties,values]of Object.entries(inse1)){
 // L += properties + " " + values + " ";
 // console.log(L);
 console.log(properties);
}
console.log(JSON.stringify(inse1));
console.log(Object.values(inse1));
//accessing our new objectin a loop
let k = " ";
for(let[properties,values]of Object.entries(inse2)){
  k += properties + " " + values + " ";
    console.log(k);
}
console.log(JSON.stringify(inse2));
console.log(Object.values(inse2));
//accessing our new objectin a loop
let s = " ";
for(let[properties,values]of Object.entries(inse3)){
  s += properties + " " + values + " ";
  console.log(s);
}
console.log(JSON.stringify(inse3));
console.log(Object.values(inse3));
//accessing our new objectin a loop
let f = " ";
for(let[properties,values]of Object.entries(inse4)){
  f += properties + " " + values + " ";
  console.log(f);
}
//resulting into an array
console.log(Object.values(inse4));
//resulting into a string
console.log(JSON.stringify(inse4));
//accessing a function method
console.log(inse1.totalInsects());
//
