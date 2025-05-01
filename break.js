// the break key word can be used to jump out of the loop
//the same loop with  a break keyword
for (let i = 0; i < 12; i++) {
  if (i === 6) {
    break;
  } //the loop counter is ended at 6
  console.log("suubi elijah");
}

// the continue keyword
for (let i = 10; i > 0; i--) {
  if (i === 6) {
    continue;
  } //the loop here will skip the 6th iteration
  console.log("sharif", i);
}

//the break keyword with the label reference

const cars = ["BMW", "prado", "lafesta", "kia", "harrier", "legacy"];
list: {
  console.log(cars[0]);
  console.log(cars[1]);
  console.log(cars[2]);
  console.log(cars[3]);
  break list;
  console.log(cars[4]);
  console.log(cars[5]);
}
