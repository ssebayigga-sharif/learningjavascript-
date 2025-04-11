//integers being accurate up to 15 digits
let f = 777777777777777;
console.log(f);
//bove 15 digits
let g = 88888888888888888;
console.log(g);
// creating a bigint
let h = 99999999999999999999;
console.log(h);
//with n at the end
let j = 99999999999999999999n;
console.log(j);
//another format for creating a bigint
let y = BigInt("7777777777777777777777777");
console.log(y);
let yy = 7777777777777777777777777n
console.log(yy);
console.log(typeof yy);
//operators on a bigint
//are the same as the operators on numbers
let v = 888888888888888888n;
let l = 9999999999999999999999n;
console.log(v * l);
// operations cannot take place btn numbers and bigint
let rc = 8n;
let fg = Number(rc) * 2;
console.log(fg);
// safe max integers and safe min integers.
let s = Number.MAX_SAFE_INTEGER;
console.log(s);
let ss = Number.MIN_SAFE_INTEGER;
console.log(ss);
// new number methods isInteger method
let hh = 78;
console.log(Number.isInteger(hh));
console.log(Number.isSafeInteger(hh));
//two example
let ggh = 8.9898888888888888;
console.log(Number.isInteger(ggh));
console.log(Number.isSafeInteger(ggh));