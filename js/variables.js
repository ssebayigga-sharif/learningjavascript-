//this code is about strings
/*let name = 'sharif';
console.log(name);
let car = 'benz';
console.log(car);
let city = 'masaka'
console.log(city);
let food = 'cassava';
console.log(food);
let subject = 'history';
console.log(subject);
let church = 'kesda';
console.log(church);
//this code is about numbers
let z = 100;
console.log(z);
let x = 1.33;
console.log(x);
let age = 90;
console.log(age);
let height = 20;
console.log(height);
// variables ot type const
const mother = 'Sharifah';
console.log(mother);
const countryname = 'Uganda';
console.log(countryname);
// variables of type let
let herage = 20;
console.log(herage);
let cars = 31;
console.log(cars);
age = 100;
console.log(age);
// datatypes
// considering numbers as variables
const pi = 3.14;
console.log(pi);
// considering variables as strings
const myName = 'sharif';
console.log(myName);
// numbers as variables 
const age2 =2133;
console.log(age2);
// value undefined
let carname;
console.log(carname);
// algebra in javascript
y = 2+3+7+8+99;
console.log(y);
// we can also add strings
let myName1 = 'ssebayigga' + '     '  + "sharif";
console.log(myName1);
// use  of an underscore
let _firstname = 'sharif';
let _lastname = 'kulu';
let _age = 43;
 console.log(_age);
 console.log(_lastname);
 console.log(_firstname);
//  using a dollar sign
let $ = 'shakul';
let $$$ = 23;
let $$ = 'fiat';

console.log($);
console.log($$);
console.log($$$);
// one statement with many variables

let car2 = 'lafesta', price = 50000000, driver = 'abdul';

console.log(driver);
console.log(car2);
console.log(price);
// adding variables
let t = 4;
let r = 8;
let v = t + r;
console.log(v);
// assignment operator
let p =  6;
p = 9 + p
console.log(p);


{
let key = 'bash';
console.log(key);
 
//this is a block.
}





let me = 'come';
{
    let me = 9;
    console.log(me);
}



{
    let y = 5**2;
    console.log(y);

    let x = 8**4;
    console.log(x);
}
//modulus
{
    let y = 9 % 3;
    console.log(y);
    let x = 9 % 2;
    console.log(x);
}
//increament
{
    let o = 7;
    o++
    console.log(o);
}
//decreament
{
    let o = 7;
    o--;
    console.log(o);
}
//addition assignment operator
{
    let o = 9;
    o+=9;
    console.log(o);
}
//subtraction assignment operator
{
    let o = 9;
    o-=9;
    console.log(o);
}
//division assignment operator
{
    let o = 9;
    o/=9;
    console.log(o);
}
//modulus assignment operator
{
    let o = 9;
    o%=9;
    console.log(o);
}
//exponential assignment operator
{
    let o = 9;
    o**=9;
    console.log(o);
}
    
//comparison operators
{
    // == operator
    let j = 8;
    console.log(j==8);
}

{
    let p = 9;

    console.log(p===9);
    let d = 8;
    console.log(d===8);
}
//not equal to operator
{
    let k = 9
    console.log(k!=9);

    let r = 5;
    console.log(r!==5);
    console.log(r!=='5');
}
//greater than and lessthan

{
    let h   = 9;
    console.log(h>7);
    console.log(h<7);
}
//greater than or equal to
{
    let r = 9;
    console.log(r>=8);
    console.log(r>=23);
}
//less than or equal to
{

    let r = 6;
    console.log(r<=8);
    console.log(r<=4);
}
//ternary operator
{
    let age = 45;
    let d = age >= 30 ? 'you are an adult' : 'you are still young';
    console.log(d);
// example two
let numbers = 69;
let many = numbers >= 30 ? 'they are many' : 'they are few';
console.log(many);
//example three
let baskets = 21;
let color = baskets >= 30 ? 'almost' : 'no more';
console.log(color);
}
//logical operators


// logical and (&&)
//example 1
{
 let p = 100;   
 let o = 10;   
 let t = 200;   
 let a = '7';
 console.log( p>o && a===p)  ; 
 console.log( p<=o && a===o)  ; 
 console.log( t==o && o===p)  ; 
 console.log( a>=o && p===t)  ; 
}
//example 2
{
 let p = 'sharif';   
 let o = '200';   
 let t = 200;   
 let a = 'sarah';
 console.log( o==t && t>=0)  ; 
 console.log( p==a && p>=a)  ; 
 console.log( t==o && o===p)  ; 
 console.log( a>=o && p===t)  ; 
}
//example 3
{
 let d = 600;   
 let r= 9000;   
 let s = 600;   
 let v = 9000;
 console.log( r >=  d && r === v)  ; 
 console.log( r >= v && d ===  s)  ; 
 console.log( s <= d && d == v )  ; 
 console.log( v === r && s ===d )  ; 
}

//example 4
{
 let c = '800';   
 let l= '540';   
 let s = '800';   
 let j = '540';
 console.log( c ===  s && j === l)  ; 
 console.log( l >= c && j ===  l)  ; 
 console.log( j <= l && s == c )  ; 
 console.log( l == j && s == c )  ; 
}
//example 5
{
 let c = 'john';   
 let l= 'kuki';   
 let s = 'cow';   
 let j = 'hen';
 console.log( c >=  s && j == l)  ; 
 console.log( l >= c && j ===  s)  ; 
 console.log( j <= l && s <= c )  ; 
 console.log( l == j && s == c )  ; 
}
//example 6
{
 let c = 67;   
 let l= 900;   
 let s = 'cow';   
 let j = 0;
 console.log( c >=  j && j == c)  ; 
 console.log( l >= c && j ===  s)  ; 
 console.log( j <= l && s <= c )  ; 
 console.log( l == j && s == c )  ; 
}
//logical operator || (or)
//example 1
{
 let c = 67;   
 let l= 900;   
 let s = 'cow';   
 let j = 0;
 console.log( c >=  j || j == c)  ; 
 console.log( l >= c || j ===  s)  ; 
 console.log( j <= l || s <= c )  ; 
 console.log( l == j || s == c )  ; 
}

//example 2
{
    let p = 100;   
    let o = 10;   
    let t = 200;   
    let a = '7';
    console.log( p>o || a===p)  ; 
    console.log( p<=o || a===o)  ; 
    console.log( t==o || o===p)  ; 
    console.log( a>=o || p===t)  ; 
   }

//example 3
{
    let p = 'sharif';   
    let o = '200';   
    let t = 200;   
    let a = 'sarah';
    console.log( o==t || t>=0)  ; 
    console.log( p==a || p>=a)  ; 
    console.log( t==o || o===p)  ; 
    console.log( a>=o || p===t)  ; 
   }
//example 4
{
    let d = 600;   
    let r= 9000;   
    let s = 600;   
    let v = 9000;
    console.log( r >=  d || r === v)  ; 
    console.log( r >= v || d ===  s)  ; 
    console.log( s <= d || d == v )  ; 
    console.log( v === r || s ===d )  ; 
   }
   //example 5
{
    let c = '800';   
    let l= '540';   
    let s = '800';   
    let j = '540';
    console.log( c ===  s || j === l)  ; 
    console.log( l >= c || j ===  l)  ; 
    console.log( j <= l || s == c )  ; 
    console.log( l == j || s == c )  ; 
   }
   //example 6
{
    let c = 'john';   
    let l= 'kuki';   
    let s = 'cow';   
    let j = 'hen';
    console.log( c >=  s || j == l)  ; 
    console.log( l >= c || j ===  s)  ; 
    console.log( j <= l || s <= c )  ; 
    console.log( l == j || s == c )  ; 
   }
  //logical operator (not) !
     //example 1
{
    let c = 'john';   
    let l= 'kuki';   
    let s = 'cow';   
    let j = 'hen';
    console.log( !(c >=  s || j == l) )  ; 
    console.log( !(l >= c || j ===  s))  ; 
    console.log( !(j <= l || s <= c ))  ; 
    console.log( !(l == j || s == c) )  ; 
   }
   //example 2
{
    let p = 100;   
    let o = 10;   
    let t = 200;   
    let a = '7';
    console.log( !( p == o && t >= p))  ; 
    console.log( !(p<=o && a===o))  ; 
    console.log( !(t==o && o===p))  ; 
    console.log( !( a>=o && p===t))  ; 
   }
   //example 3
{
    let d = 600;   
    let r= 9000;   
    let s = 600;   
    let v = 9000;
    console.log( ( ))  ; 
    console.log( !(r >= v && d ===  s))  ; 
    console.log( !(s <= d && d == v) )  ; 
    console.log( !(v === r && s ===d ))  ; 
   }
  //example 4
{
    let c = '800';   
    let l= '540';   
    let s = '800';   
    let j = '540';
    console.log( !(c ===  s && j === l))  ; 
    console.log( !(l >= c && j ===  l))  ; 
    console.log( !(j <= l && s == c) )  ; 
    console.log( !( l == j && s == c ))  ; 
   }
   //example 5
   
{
    let c = 'john';   
    let l= 'kuki';   
    let s = 'cow';   
    let j = 'hen';
    console.log( !(c >=  s && j == l))  ; 
    console.log( !( l >= c && j ===  s))  ; 
    console.log( !(j <= l && s <= c) )  ; 
    console.log( !( l == j && s == c) )  ; 
   }*/
   //example 6
   
{
    let d = 600;   
    let r= 9000;   
    let s = 600;   
    let v = 9000;
    console.log( !(d >= r || v === s))  ; 
    console.log( !( r >= v || d ===  s))  ; 
    console.log( !(s <= d || d == v ))  ; 
    console.log( !( v === r || s ===d ))  ; 
   }