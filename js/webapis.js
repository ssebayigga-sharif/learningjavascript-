//this is the memory heap
const b = 45;
const v = 305;
const m = 105;
//memory stack that reads and executes our code
console.log(v);
console.log(m);
console.log(v);
function webapi() {
  const callStack = () => {
    console.log("it is sharif in the house");
  };
  callStack();
}
webapi();
//stack overflow
// function overflows() {
//   overflows();
// }
// overflows();

//promises
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("we passed");
  } else {
    reject("we failed");
  }
});
promise.then((result) => console.log(result));

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("people");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("woman");
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("man");
  }, 3000);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("going");
  }, 4000);
});
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("went");
  }, 5000);
});

Promise.all([promise1, promise2, promise3, promise4, promise5]).then(
  (values) => {
    console.log(values);
  }
);

//more about promises
const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/photos",
];
Promise.all(
  urls.map(() => {
    return fetch(urls).then((resp) => resp.json());
  })
)
  .then((result) => {
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
    console.log(result[3]);
  })
  .catch(() => {
    console.log("error");
  });

//
const promiseName = new Promise((resolve, reject) => {
  if (Number) {
    console.log("his count");
  } else {
    console.log("it was not a count");
  }
});

promise.then((answer) => {
  console.log(answer);
});

async function herName() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  const herData = await data.json();
  console.log(herData);
}
herName();
//async
async function getData() {
  const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/todos",
  ];

  try {
    // Wait for all fetch requests to complete
    const responses = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );

    // Destructure the results
    const [myName, hisName, theirNames, baby] = responses;

    // Log the results
    console.log("myName:", myName);
    console.log("hisName:", hisName);
    console.log("theirNames:", theirNames);
    console.log("baby:", baby);
  } catch (error) {
    console.error("Oops! Something went wrong:", error);
  }
}

getData();
