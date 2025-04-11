let myName = "sharif ssebayigga";
console.log(myName.length);
//escape characters
let go = "i like \"going\" for hikes ";
console.log(go);
//line breaking
let mi = "she will come \n today";
console.log(mi);
//string methods
//charAt()
let x = "hello john";
console.log(x.charAt(7));
//charcodeat()
let r = "sharif";
console.log(r.charCodeAt(1));
//the at() method
let h = "kawiso";
console.log(h.at(2));
//property access[]
let rt = "atom";
console.log(rt[1]);
//extracting string parts

//method 1

//slice method
let cars = "benz, ford, legacy";
console.log(cars.slice(5, 10));
//missing out the second parameter
let car = "bens, ford, legacy";
console.log(car.slice(4));
//using negative values
let ca = "bens, ford, legacy";
console.log(ca.slice(-12 ,-8));
//method two

//substring
let o = "orange, oracle, opponent";
console.log(o.substring(7, 14));
//converting to capital letters
let message = "hello world";
console.log(message.toUpperCase());
//converting to lowercase letters
let messages = "HELLO KAMPALA";
console.log(message.toLowerCase());
//adding strings using string methods
//using concat method
let first = "kamoga";
let last = "sudais";
console.log(first.concat(" ", last));
//removing white spaces from a string
let c = "  kukkiriza esther   ";
console.log(c.trim());
//we can trim only at the beginning of a string
let cc = "    sherrif";
console.log(cc.trimStart());
//we can also trim at the end of a string only
let ccc = "terminator    ";
console.log(ccc.trimEnd());
//string padding
//paddinh fro the begining of a string
let p = "78";
console.log(p.padStart(7, "5"));
//padding at the end
let e = "9";
console.log(e.padEnd(4, "9"));
//we can also repeat a strinh using the repeat method
let rep = "hello uganda" + " ";
console.log(rep.repeat(6));
//we can also replace a string using the replace method
let re = " i love legacy cars";
console.log(re.replace("legacy", "ford"));
/*since the replace method is case sensitive to relace capitals with 
small letters we the /i flag */
let d = "CAPITAL" ;
console.log(d.replace(/CAPITAL/i, "capital"));
//we can also replace the entire expression using the replaceall method
let he = " rinah is coming";
console.log(he.replaceAll( "rinah is coming", "sharifah is coming"));
//we can also change a string to an array
//using the split method
let op = "hakim sharif | shakur";
//console.log(op.split(","));
console.log(op.split(" "));
console.log(op.split("|"));
console.log(op.split("m"));
console.log(op.split("a"));