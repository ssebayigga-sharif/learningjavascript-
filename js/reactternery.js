//the simplified version of the if / else
//example of if / else
const myAge = 32;
if (myAge > 18) {
  console.log("i am ready for hostel"); // because the condition is true we expect the if to return
} else {
  console.log("i am still young for hostels");
}

//the ternery operator simplifies the syntax

myAge < 30
  ? console.log("i am too young for a permit")
  : console.log("i am ready for the permit"); // because the cndition is false we expect the else to return

// the ternary operetor is simply brief compared to the if / else statements

// example two

const names = "ssebayigga sharif";
if (names.length > 20) {
  console.log(" his name is a bit long");
} else {
  console.log("his name is the easiest");
}

// using the ternary operator
names.includes("x") ? console.log("yes") : console.log("not really"); //we expect not really because x
//  is not in the string
//the ternary operator makes the syntax shorter
