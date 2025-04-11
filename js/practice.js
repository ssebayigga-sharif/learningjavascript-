
function you () {
  console.log('do i see this line');
return 'my name is sharif';

}
you();
console.log(you());
//return
function veins() {
  return "the year 2025";
}
console.log(veins());
//return
function come() {
  return "she might come tmoro";
}
console.log(come());
//no return
function popup () {
  console.log("they will appear");
}
console.log(popup());

//() operator
function toCelsius(f) {
  return (5/9) * (f-32);
}

let value = toCelsius(100);
console.log(value);

//() operator one to degrees

function toDegrees (d) {
  return (80 / 100) * (d);
}
let ans = toDegrees(360);
console.log(ans);
//() operator two to percentage

function toPercent (p) {
  return (288 / 360) * (p)
}
let answ = toPercent(100);
console.log(answ);
//functions
function bee () {
  console.log('i like honey bees');
}
bee();
//function 2 parameters
function divi (b , g) {
  console.log(b * g);
}
divi(6 , 9);
//function () operator
function truef (h) {
  return (1/2) * (h);
}
let g = truef(10);
console.log(g);

//local variable

function g() {
  let gop = "volvo";
  let ans = 'out:' + typeof gop + ' '  + gop;
  console.log(ans);
}

g();
//functim converting from grams to kg
function grams(toKg) {
  return  (0.001) * toKg;
}
let kg = grams(50.71);
console.log(kg);

//function speed tym

function distanceMoved (speed , time) {
  return speed * time ;
}
let values = distanceMoved(2 , 2);
console.log(values);
//calculating cost of a tray of eggs
function cost (eggs , amount) {
return eggs * amount ;
}
console.log(cost(36 , 500));
//function to calculate no of boys in a class
function boys (total , girls) {
  return total - girls ;
}
console.log(boys(71 , 35));
//function to calculate my age
function myAge (year1 , year2) {
return year2 - year1 ;
}
console.log(myAge(2002 , 2025));
//function converting to meters
function toMeters (cm) {
  return (1000) / cm;
}
console.log(toMeters(100));
//function used as variales
let temp = "it is hot of about" + " " + celcius(88) + " " + "celcius";
console.log(temp);
function celcius (fm) {
  return fm - 49;
}

//local variables
let b = typeof gd;
console.log(b);
function vari () {
  let gd = "sharif";
  let b = typeof gd;
  console.log(b);
}
vari();