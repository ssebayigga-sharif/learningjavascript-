//boolean function
let m = Boolean(67 === "67");
console.log(m);

// or even easier
let t = 8 > 2;//best method for creating booleans
console.log(t);

// or 
let o = `sharif is a thief`;
let p = `sharif is not a thief`;
let padon = o < p;
console.log(padon);

//type  of
let g = false;
console.log(typeof g);

//and
let y = new Boolean(false);//not recommended
console.log(typeof y);

// comparing booleans
let one = Boolean(true);
let two = new Boolean(true);// not recommended when declaring booleans
let result = one == two;
console.log(result);

// comparing booleans
let ones = Boolean(true);
let twos = new Boolean(true);//its hard to compare boolean objects with booleans
let results = one === two;
console.log(results);