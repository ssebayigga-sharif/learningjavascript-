// arraysort methods  (alphabeticalsorting)

const fruits = [ "apple", "orange", "grapes", "mangoes", "avocado"];
let sorted = fruits.sort();// returns an array arranged in alphabetical order in ascending order
console.log ('sorted array ',sorted);

//we can also reverse an array
const motors = ["fiesta", "sienta", "fielder", "prado", "4matic"];
let reversed = motors.reverse();
console.log('reversed array ',reversed);//returns an array in reversed format || in descending order

//tosorted method
const girls = ["kuki", "moreen", "sham", "maria", "zeridah", "leontin"];
let resorted = girls.toSorted();
console.log('to sorted array ',resorted);//works like the sort method buh higly recomended than the sort method

//toreversed method
const boys = ["muzafalu", "abel", "cain", "mubiru"];
let rereversed = boys.toReversed();
console.log('toreversed array ',rereversed);// works like the reverse method and highly recommended than the reverse method



// numeric sort
// in ascending order

const numbers = [1, 20, 3, 4, 53, 700, 6, 7, 8, 9, 10, 12, 13, 14, 15, 5, 16, 2, 17, 18];
let Sorted = numbers.sort(me);// returns an array of numbers arranged in ascending order
//the first parameter is taken as the 
function me (x, y){
    return x - y;
}
console.log(Sorted);

//in descending
const acount = [300, 200, 100, 50, 5, 1];
 let descending = acount.sort(sher);
 function sher(esther, kuki){
    return kuki - esther
}

 console.log(descending);// returns an array arranged from the largest num to the smallest || descending

// const ccount = [4, 1, 3, 8,9, 1000, 2000];
// console.log(ccount.sort());

const luck = [446520, 676990, 305570];
let lucky = luck.sort(lucki);
function lucki(){
    return 0.5 - Math.random();
};
console.log(lucky);
// the math.floor method
let it = 3.4;
console.log(Math.floor(it));

let mee = Math.random() * 7;
console.log(mee);
//
let j = Math.random() * (5+1);
console.log(j)
let k = Math.floor(j);
console.log(k);


// using thhe fisher yates methd to sort a numeric array
const myCount = [56, 68, 35, 56, 200];
for (let i = myCount.length - 1; i > 0; i--){
    let use = Math.floor( Math.random() * (i + 1));
    let used = myCount[i];
    myCount[i] = myCount[use];
    console.log(used);
}

// finding the min and max grades

const grades = [4, 3, 1, 2, ];
let best = grades.sort(always);
function always(b , m){
    return b - m;
};
console.log(grades[0]);
console.log(grades[grades.length - 1]);

// using math.min method
const mini = [2, 4, 6, 8, 10];//highly recomended
let she = Math.min.apply(null,mini);//retuns the minimum number in an array
console.log('the minimum is ',she);
// using the math.max
const maxi = [34, 45, 67, 99, 78, 1000];//highly recommended
let he = Math.max.apply(null, maxi);//returns the maximum number in tthe array 
console.log('the maximum is',he);