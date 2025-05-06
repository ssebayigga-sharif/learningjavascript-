const rides = ["volvo", "ford", "legacy", "prado"];
const [you, me, him, her] = rides;
console.log(her);

//we can skip elements using the comma
const [hers, , , his] = rides;
console.log(his);
console.log(hers);

//destructuring a function as it returns an array
function count(c, d) {
  const boys = c + d;
  const girls = c * d;
  const women = c / d;
  return [boys, girls, women];
}
count(22, 22);
const [boys, , women] = count(22, 22);
console.log(boys);
console.log(women);

// part two
function deliver(eat, drink) {
  const masaka = eat;
  const kampala = drink;
  const mbarara = drink;
  return [masaka, kampala, mbarara];
}
const [mas, kamp, mbarara] = deliver("posho", "yoghurt");
console.log(mas);
console.log(kamp);
console.log(mbarara);

// destructuring objects
const person = {
  name: "shafic",
  age: 22,
  city: "kampala",
};
//this is called hoisting || using a function accountfor before creating it
accountFor(person);
function accountFor({ name, age, city }) {
  return name + " is " + age + "  years  old  " + "who comes from " + city;
}

console.log(accountFor(person));

//example of a nested object
const house = {
  // this is the major object house
  color: "yellow",
  lengthh: 23,
  height: 12,
  rooms: 5,
  boysQuater: {
    // this is the nested object boysquater
    color: "green",
    height: 6,
    lengthh: 12,
    room: 2,
  },
};
//destructuring the nested object
const {
  rooms,
  boysQuater: { color, room }, //this is the destructured object
} = house;
console.log(house.boysQuater.room);

//more about destructuring

const defineMe = {
  firstName: "sharif",
  lastName: "ssebayigga",
  age: 22,
  district: "wakiso",
  city: "kampala",
  mom: {
    firstNam: "zafalan",
    lastNam: "nansubuga",
    ag: 42,
    distric: "wakiso",
    cit: "kampala",
  },
};

//destructuring the object
const {
  age,
  firstName,
  mom: { firstNam, ag, cit },
} = defineMe; //accessing the properties of the destructured object
console.log(defineMe.age);
console.log(defineMe.firstName);
console.log(defineMe.mom.ag);
console.log(defineMe.mom.firstNam);
