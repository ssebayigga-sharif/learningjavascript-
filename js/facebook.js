//our facebook database
const database = [
  {
    username: "sharif",
    password: 22,
  },
  {
    username: "shakur",
    password: 24,
  },
  {
    username: "shakirah",
    password: 25,
  },
  {
    username: "Bashiirah",
    password: 28,
  },
  {
    username: "Abdul",
    password: 30,
  },
];
console.log(database);

const newsFeed = [
  {
    username: "Suubi",
    timeline: "i love programming",
  },
  {
    username: "Esther",
    timeline: "i always programe",
  },
  {
    username: "Elizabeth",
    timeline: "i like javascript",
  },
  {
    username: "Kamoga",
    timeline: " c++ is the best for me",
  },
  {
    username: "meddy",
    timeline: "me and football we are like king and queen",
  },
];
console.log(newsFeed);

//checking validity
function isUserValid(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}
//usersigning in
function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    console.log("wrong username or password");
  }
}

//THIS WORKS BETTER IN A BROWSER
// let usernamePrompt = prompt("what is your username");
// let passwordPrompt = prompt("what is your password");
// signIn(usernamePrompt, passwordPrompt);
