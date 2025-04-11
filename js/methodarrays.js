// array mwthods
const birds = ["hen", "cock", "duck", "chick"];
console.log(birds.toString());
console.log(typeof birds);

// at() array method
console.log(birds.at(2));

// using the join method
console.log(birds.join(" * "));

// popping out an element  in an array
console.log(birds.pop());  //removes the last element of an array
console.log(birds);

//the push() method
console.log(birds.push("dove")); //adds an element at the end of the array
console.log(birds);

// the shift method
console.log(birds.shift()); // removes the first element of an array
console.log(birds);

// the unshift method
console.log(birds.unshift("pigeon"));
console.log(birds);

//array concatnation   or    adding two or more arrays
const cars = ["ford", "legacy", "4matic"];
const wheels = ["motocycle", "motoengine", "a bicycle"];
// we add two arrays using the concat method
console.log(cars.concat(wheels));

//we can also concatnate morethan two arrays

const veg = ["spinach", "nakati", "doodo"];
let all = cars.concat(wheels, veg);  // adding three arrays
console.log(all);

// the same method can also add an element to an array
console.log(cars.concat("sienta"));


// flat() array method
const mixed = [[1, 2, 3, 4],["a","b", "c"], ["i", "ii", "iii", "iv"]];
console.log(mixed.flat());// joins all the sub arrays into one array

//the splice method
const vehicles = ["legacy", "prado", "harrier"];
console.log(vehicles.splice(0,1, "wish", "ford"));  // adds elements from index zero and deletes one element
console.log(vehicles);

// the slice method
const months = ["jan", "feb", "mar", "april", "may"];
console.log (months.slice(1,3));// selects out the elements at the persed index
// slicing with one argument
console.log(months.slice(2));  // result is from index 2 up to the end of the array

// copywithin method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let ans = fruits.copyWithin(2, 0);
console.log(ans)


// tosplice method
const month = ["Jan", "Feb", "Mar", "Apr"];
const spliced = month.toSpliced(0, 1);
console.log(spliced);

//example two
const years = [2002, 2003, 2004, 2005, 2006];
let spliceds = years.toSpliced(2, 2);  //removes the element at index two as the first parameter
//and removes two elements as the second parameter is two
console.log(spliceds);
// copy within
const eats = ["pineapple", "mangoes", "oranges", "melons"];
eats.copyWithin(2, 1);
console.log(eats);
//example two
const vege = ["kawo", "beans", "lentils", "peas"];
vege.copyWithin(0, 2);
console.log(vege);

// the flatmap method
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr);


// example two
const nums = [1, 2, 3, 4, 5, 6];
let nun = nums.splice(3, 2,  "sharif", "essie");
console.log(nun);
console.log(nums);

//third example
const colors = ["red", "yellow", "black", "green"];
let news = colors.splice(1, 3, "maroon", "grey", "creem", "lightblue");
console.log(news);// returns the deleted elements of an array
console.log(colors);// returns the new array after splicing it


//the tospliced method
const monthss = ["jan", "feb", "mar", "apr"];
let of = monthss.toSpliced(4, 0, "may", "jun", "july");
console.log(of);// returns the new array
console.log(monthss);

//example two 
let o = [1, 3, 5, 7];
const tot = o.toSpliced(0, 4, "3", "1", "2", "5");
console.log(tot);// returns the new array

// example three
let me = [true, false];
let mee = me.toSpliced(3, 0, "shifrah", {name:"sharifah"}, 4, [8, 9, 0, 7, 6]);
console.log(mee);

//the slice method
const yearss = [2001, 2002, 2003, 2004, 2005, 2006];
let fff = yearss.slice(2); // returns elements from index two until the array ends
console.log(fff);

// example two with two arguments
let ff = yearss.slice(1, 3); // returns the elements from 1 to 2 
// because the element at the last parameter is ignored
console.log(ff);

//example three
const year = [2000, 2002, 2004, 2006, 2008];
let it = year.slice(0, 2); // it ignores the element at latsindex persed as the last parameter
console.log(it);

// automatic to string 
const favo = ["red", "green", "yellow", "pink", "lemongrey"];
console.log(favo.toString());

// the splice method
const phones = ["iphone", "samsung", "itel", "intel", "jov", "liao", "camon", "swift", "sherrif"];
//let result = phones.splice(5, 2, "kamunye", "kabalagala");
//console.log("the spliced array" ,result);
//console.log(phones);






