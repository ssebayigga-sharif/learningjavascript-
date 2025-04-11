//method one is the toString method
let g = 88888;
let to = g.toString();
console.log(typeof to);
//or 
console.log((888888).toString());
// or
console.log((200 * 4).toString());// returns a number as a string

//method two of numbers    toExponential method
// also returns a string with the number written en exponentialnotation
let k = 8.90;
console.log(k.toExponential(7));
console.log(k.toExponential());
console.log(k.toExponential(2));   // returns a number written in exponential form
// method three     toFixed method
let kk = 89.897777;
console.log('the first to fix is',kk.toFixed());
console.log('will give us ',kk.toFixed(1));
console.log(kk.toFixed(2)); // is perfect with money
console.log(kk.toFixed(4));
console.log(kk.toFixed(6)); // to a certain number of decimal places
//method four    precision method
let w = 52;
console.log(w.toPrecision());
console.log(w.toPrecision(3));
console.log(w.toPrecision(6));
console.log(w.toPrecision(8));// to a certain length

// method five is the valueOf method;
let o = 78;
console.log(o.valueOf());
console.log((76).valueOf());
let f = 8 * 4;
console.log(f.valueOf());
console.log((4 * 4).valueOf()); // returns a number as  a number


// methods used to convert variables to numbers
console.log(Number("89"));
console.log(Number("joy"));
console.log(Number("89.2"));
console.log(Number("89 79"));
//this method turns dates into numbers
console.log(Number(new Date("1970-01-01")));

//the perseint method
console.log(parseInt("67"));
console.log(parseInt("67.67"));
console.log(parseInt("67 98 67"));
console.log(parseInt("67 joy"));
console.log(parseInt("keith 89"));  //returns a number before the spaces and the decimal; unlike the number method

// the perse float method
console.log(parseFloat("888"));
console.log(parseFloat("888.9"));
console.log(parseFloat("888 999"));
console.log(parseFloat("888 kul"));
console.log(parseFloat(" kul 888"));
console.log(parseFloat("888 777 5555 6666")); //returns a floating point number as it is unlike the perseint method.


//number object methods
// method one is the number.isinteger
console.log(Number.isInteger(555));// true cos its an integer without a decimal
console.log(Number.isInteger(55.5)); // false due to the decimal

// method two number.issafeinteger.
console.log(Number.isSafeInteger(134));// true cos the integer is safe
console.log(Number.isSafeInteger(13484749829058934458349));// safe becose its above the recommended digits

//the number.persefloat method
console.log(Number.parseFloat("56")); // returns a string as a number
console.log(Number.parseFloat("56 98"));
console.log(Number.parseFloat("56.7")); // return a float as a float
console.log(Number.parseFloat("56 hon"));
console.log(Number.parseFloat(" non 56"));// returns the first values before the spaces


//number.perseint method
console.log(Number.parseInt("89"));// always returns whole numbers.
console.log(Number.parseInt("89.9"));//returns a float as a whole number
console.log(Number.parseInt("89 78 67"));// returns the first value before the spaces
console.log(Number.parseInt("89 lol"));
console.log(Number.parseInt(" bees 89"));
console.log(Number.parseInt("8.9")); //returns  a string as a number

