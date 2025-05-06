//the spread operator allows us to copy a part || the
//  whole array or an object into another array or object

//combining arrays
const myCount = [0, 1, 2, 3, 4, 5];
const herCount = [6, 7, 8, 9, 10];
const theirCount = [11, 12, 13, 14, 15];
// the combining array
const ourCount = [...myCount, ...herCount, ...theirCount];
console.log(ourCount); //returns one array combining all the arrays

//example two
const myAnimals = ["cow", "bull"];
const herAnimals = ["goat", "sheep"];
const hisAnimals = ["lamb", "cat"]; //the order to use while combining these arrays does not matter
//the elements of the first array to be persed in the new array comes first

// the combining array
const totalAnimals = [...herAnimals, ...hisAnimals, ...myAnimals];
console.log(totalAnimals); // returns a new array containing all the elements of the three arrays

//the spread operator combined with destructuring

const fruits = ["apple", "tomatoes", "berries", "oranges", "pineapples"];
const [fav, , , , eat, ...rest] = fruits;
console.log(fav);
console.log(eat);
//console.log(...rest);

// we can also use the spread operator to combine objects

const mom = {
  // this is the major object
  name: "sharifah",
  age: 59,
  city: "kampala",
  address: {
    // this is called the nested object
    country: "Uganda",
    district: "wakiso",
  },
};
// second object

const herSon = {
  nam: "sharif",
  ages: 12,
  cit: "kampala",
};

// using the spread operator to combine the objects

const family = { ...mom, ...herSon };
console.log(family); //returns one object with a combination of the mom and herson objects

export { fruits, herSon, mom };
