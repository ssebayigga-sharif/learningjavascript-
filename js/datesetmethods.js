//the set fullyear
const g = new Date("2000 02 10");
let year = g.setFullYear(2002);//returns the milliseconds from 1 jan 1970 to 2000 02 10;
console.log(year);

//the set monthmethod
let month = g.setMonth(3);
console.log(month);

//the setday method
const m = new Date();
console.log(m.toDateString());

// 1 year ≈ 1000  60  60  24  365.25 = 31,557,600,000 milliseconds

//the setmethod three
// the setmethod method
const today = new Date("2025 04 19");
let dateset = today.setDate("21");
console.log(dateset);

//the sethours method
let sethours = today.setHours("13");
console.log(sethours);

//the setminutes method
let setminutes = today.setMinutes(40);
console.log(setminutes);

// the setseconds methods
let setseconds = today.setSeconds(40);
console.log(setseconds);

//comparing dates
const todays = new Date();
const anydate = new Date("2007 04 20");
let text = "";
if (anydate > todays) {
    text = "we are in the future";//returned if the condtion is true
}else {
    text = "we are in the past";//returned if the condition is false
};
console.log(text);

//comparing dates in example two
let yesterday = new Date();
let tommorrow = new Date("2020 04 20");
let store = " ";

if (yesterday < tommorrow){
    store = "it is the same date";//returns this string if the condition is true
}else{
    store = "it is a different date";//returns this string if the condition is false
};

console.log(store);