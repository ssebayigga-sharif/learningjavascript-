// the ISO date format 
// that is the most prefferedd in javascript
const dates = new Date ("2025-4-17");
console.log(dates);
console.log(dates.toUTCString());// returns the date in a string format

// ISO dates can be written without specifying the day
const to = new Date("2025-04");
console.log(to);
console.log(to.toDateString());

// ISO dates can also be written with only a year
const t = new Date("2025");
console.log(t.toDateString());
console.log(t);

// the short dates in ISO
const tc = new Date("2025-04-09");// highly advisable to add zeroes on the month and day
console.log(tc);
console.log(tc.toDateString());

// the long dates in ISO
const tb = new Date("2025-march-08");
console.log(tb);
console.log(tb.toDateString());

// the perse method returns milliseconds between 1970 and the date delt with
const mill = Date.parse(new Date());// 
console.log(mill);
const gg = new Date(mill);// turns milliseconds into the new date object
console.log(gg);
console.log(gg.toDateString());