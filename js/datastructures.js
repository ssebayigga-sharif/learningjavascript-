//array data structure

const alpha = ["a", "b", "c", "d", "e"];

alpha.push("sharif"); // o(1) super first
alpha.pop(); // O(1) also super first
alpha.unshift("sherif"); //O(n) slower due to many changes in the array indexes
alpha.splice(3, 0, "come"); //O(n) slower due to many changess in the array indexes
console.log(alpha);

//building my own array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const deleted = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const herArray = new MyArray();
herArray.push("sharif");
herArray.push("sherif");
herArray.push("will");
herArray.push("come");
// herArray.pop();
herArray.delete(0);
console.log(herArray);

//reversing a string
function rever(str) {
  return str.split("").reverse().join("");
}
console.log(rever("my name is sharif"));

//with es6
const revert = (str) => str.split("").reverse().join("");
console.log(revert("her name is bash"));
//with es6
const revert2 = (str) => [...str].reverse().join("");
console.log(revert2("her name is bash"));
// merge sorted arrays
// [0, 3, 4, 31],
// [4, 6, 30],
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0]; //grabs the first item of the first array
  let array2Item = array2[0]; //grabs the first item of the second array
  //just incase somebody deletes one of the arrays accidentally to avoid errors lets do this
  let i = 1;
  let shar = 1;
  if (array1 === 0) {
    return array2;
  }
  if (array2 === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[shar];
      shar++;
    }
  }
  return mergedArray;
}
let g = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log(g);

//hash tables as another data structure
const mine = {
  name: "sharif",
  city: "Kampala",
  country: "Uganda",
  age: 23,
  screens() {
    console.log("I am driving to school");
  },
};
mine.spell = " Bruno Guimaraes";
console.log(mine); //O(1)
console.log(mine.screens()); //O(1)
console.log(mine.country); //O(1)

//hash table two
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);

console.log(myHashTable._hash("grape"));
