// we have 8 javascript datatypes
// strings
/*
let age = '56';
const hername = 'shakirah';
const carname = 'volvo';
console.log(carname);
// booleans
let h = true;
let k = false;
console.log(k);
// arrays
let cars = ['volvo', 'spacio', 'sienta', 'prado', 'mark x', 'lafesta']
console.log(cars);

// type of in javascript
console.log( typeof 56);
console.log( typeof {name:'sharif', age:'22', eyecolor:'yellow',city:'kampala'});
console.log( typeof ['volvo', 'spacio', 'sienta', 'prado', 'mark x', 'lafesta']);
console.log( typeof true);
console.log ( typeof'volvo');
// undefined
let benz;
console.log(benz);
console.log(typeof benz);
// empty value
let herage = '';
console.log(herage);
console.log(typeof herage);
// adding numbers as strings
let q = '32';
let l = 78;
let g = l + q;
console.log(g);
// adding strings
let my = 'sharif';
let name = 'ssebayigga'
let myname = my + name;
console.log(myname);
{
    let y ; //undefined
    y = 6; //y is a number
    y = 'sharif' // y is a string
    console.log(y);
}*/
// numbers
let height = 56;
let width = 23;
console.log(width);
console.log(height);
// objects
const person = {name:'sharif', age:'22', eyecolor:'yellow',city:'kampala'}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.eyecolor);

//objects
const personn = {
firstname:'sharif',
lastname:'ssebayigga',
age:22,
height:'short',
eyecolor:'reddishbrown',
occupation:'none'
}
console.log(person);
console.log(personn.city);
console.log(personn.firstname);
console.log(personn.lastname);
console.log(personn.height);
console.log(personn.occupation);
console.log(personn.eyecolor);
//the object above is personn
//it has properties like age , height, eyecolor.
//each property has a value
//we access the proprties by consol loging our object
//we access proprty values by consoling (person . property ie person.age)

//javascript arrays
//an array is a list of items
{
    const cars =['volvo', 'spacio', 'prado','lafesta']
    console.log(cars[3]);
    console.log(cars[2]);
    console.log(cars[1]);
    console.log(cars[0]);
    console.log(cars);
}
//boleans
//has values ( treu && false)
{
    let r = 8;
    let k = 5;
    let a = 17;
    let v = 2;
    console.log( a >= r );
    console.log( a === k );
}
//types being dyamic
//this probably means a variable can be used to hold varius datatypes
{
    let p; //undefined
     p = 'rat'; //a string
     p = 9; //is a number
     p = [5, 8, 6, 5]; //is an array
     console.log(p);
}