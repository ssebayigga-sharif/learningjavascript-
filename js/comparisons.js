//the && operat
const same = (8 > 6) && (6 >= 5);
console.log(same);

// the || eperator
const or = 6 > 3  || 3 > 6;
console.log(or);

// the not operator
const no = "sharif" !== "sharif";
console.log(no);
// the ternary operator
//if u go to school u will be rich or poor
const schooling = "go";
const orr = ( schooling == "not")? "will be poor" : "will be rich";
console.log(orr);
//the score > 90 == a || poor performance

const score = 92;
const great = ( score < 90) ? "poor performance" : " got an A";
console.log(great);

// the nullish operator

let g = "sudaisi";
let b = "kamoga";
let result = g ?? b;
console.log(result);

//optional chaining operator
const person = {age:20, city:"kampala", mum:"sham"};
let may = person?.name;
console.log(may);

//more about the ternary operator

let name = "sharif";
let yeah = (name == "sherrif")? "yes he is the one" : "no he is not the one";
console.log(yeah);
//more on the ternary  operator
let car = "volvo";
let drives = (car == "vovo")? "yes" : "no";
console.log(drives);


//the nullish operator
let her = "elizabeth";
let him = "sharif";
let nullified = her ?? him;  //this one returns the first argument if its not null
console.log(nullified);