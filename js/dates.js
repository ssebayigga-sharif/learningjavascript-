// the order of dates is year, month, day, time, minutes, seconds, and milliseconds
//dates in javascript
const d = new Date();
console.log(d);// this retuerns the current time and date

//my bd 
const birth = new Date("2002-11-20");
console.log(birth);// it returns the date persed 

// ways of creating the date objects
const a = new Date(2025, 8);
console.log(a); // returns the date withe the year and the month

const b = new Date(2025, 8, 1);
console.log(b); // returns the date with year, month and day

const f = new Date(2025, 8, 2, 24);
console.log(f); // returns the date with the year, month, day and time
console.log(f.toDateString());

const e = new Date(2025, 8, 3, 4, 6);
console.log(e); // returns the date with the year, month, day, time and minutes
console.log(e.toDateString());

const c = new Date(2025, 9, 4, 4, 23, 40);
console.log(c); //returns the date with the year, month, day, time, minutes and seconds
console.log(c.toDateString());

const times = new Date(2002, 10, 5, 2,40, 12, 100);

console.log(times);
console.log(times.toDateString());
// we can use milliseconds to get a future year or a year that passed
const  today = new Date( - 100000000000);
console.log(today);
console.log(today.toDateString());

// the date methods 
const s = new Date();
let sd = s.toDateString();
console.log(sd); // local method

// using the utc method
const h = new Date();
let gh = h.toUTCString();
console.log(gh); // general method