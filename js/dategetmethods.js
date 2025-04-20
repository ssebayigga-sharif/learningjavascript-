//the new date constructor returns the current date and time
// get the current date and time
const now = new Date();
console.log(now);
console.log(now.toDateString());
console.log(now.toUTCString());

// first method is the getfullyear() method
const h = new Date("2025 mar 08");
let year = h.getFullYear();// returns only the year in 4 digits
console.log(year);

// the getmonth method
let month = h.getMonth();//returns the month as a number from 0 - 11
console.log(month);

//we can an array to return the name of the month

 const months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];

    let it = new Date();
    let ans = months[it.getMonth()];
    console.log(ans);

    //the get datemethod();

    const date = h.getDate(); // returns the day in numbers
    console.log(date);

    //the get hours mthod

    const myDate = new Date();
    let hours = myDate.getHours();//returns the hour currently btn 0 and 23
    console.log(hours);

    //the get minutes method
    let minutes = myDate.getMinutes();// returns the minutes past the current hour
    console.log(minutes);


//the get seconds method
let seconds = myDate.getSeconds(); //returns the seconds past the current time
console.log(seconds);

//the get milliseconds method
let milliseconds = myDate.getMilliseconds();// returns the milliseconds past the current time as a num btn 0 - 999
console.log(milliseconds);

//the get daymethod
let day = myDate.getDay();
console.log(day);

// we can use an array of days to return the name of the day
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = days[myDate.getDay()];
console.log(today);

//the get time method
let time = myDate.getTime();//returns the number of milliseconds since jan, 1, 1970
console.log(time);

//the date.now method
let nowa = Date.now();
console.log(nowa);

//the gettimezoneoffset method
let zone = myDate.getTimezoneOffset();//returns the difference btn local time and standarerd time
console.log(zone);