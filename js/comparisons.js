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

//more operators
let m = 5;
// the double equal operator
console.log(m == 5);// returns true because the condition is true

//the tripple equal operator
console.log(m === 5);// returns true because the condition is true

//the notequal to operator
console.log(m != 5);// returns false because the condition is false

//the not equal to with double equal signs
console.log(m !== 5);// returns false because the conditin is false

//the lessthan or equal to operator
console.log(m <= 5);// returns true because the condition is true

//the greaterthan or equal to operator
console.log(m >= 5);// returns true because the condition is true

//the not operator
console.log(!(m == 5));//returns false because the condition is false

//comparisons in conditional statements
let driversAge = 26;
if(driversAge >= 25){
    text = "he is ready to take the job from january";
};
console.log(text);

//the logical operator &&

const nam = "sharif";
const area = "kampala";//the && operator returns false if one or both conditions are false
let response = nam.length <= area.length && nam.at(2) == area.at(1);
console.log(response);// the && operator only returns true when both conditions are true

//the logical operator ||

const boys = ["kawiso", "ssebayigga", "abdul"];//this operator returns true when one or both conditions is true
const girls = ["carol", "maya", "precious", "stella"];
let right = boys.indexOf("kawiso") == girls.indexOf("maya") || boys.includes("abdul") == girls.includes("men");
console.log(right);//returns false only when both conditions are false

//the ternary operator ?

const lives = "sharif lives in kayunga wakiso";//returns the first string if the condition is true
let yes = (lives.length < 20)? "the text is okay" : "you wrote too much";
console.log(yes);// the operator returns the second string if the condition is false