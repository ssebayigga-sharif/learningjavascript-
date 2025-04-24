//function to calculate the
function bodyMassIndex(heightCm, weightKg) {
  // 1 m == 100cm; 160cm / 100m
  let toMeters = heightCm / 100;
  let heightInMeterSquared = toMeters * toMeters; //multiplies the height by its self
  return weightKg / heightInMeterSquared;
}
bodyMassIndex(160, 72); //the arguments for the parameters
console.log(bodyMassIndex(160, 72));
console.log("esther and her bmi", bodyMassIndex(160, 79));
console.log("elizabeth and her bmi", bodyMassIndex(170, 72));


//the interpretation of the bodymassindex
let standings = " ";
function bmiInterpretation() {
  let bmi = 20.5;
  
  if ( bmi < 18.5 ){
    standings = "this person is under weight";
  }
  else if ( bmi > 18.5 && bmi < 25.9)
  {
    standings = "this persons weight is normal";
  }
  else if (bmi > 25.0 && bmi < 29.9)
  {
    standings = "this person is over weight";
  }
  else if (bmi > 30 && bmi < 40)
  {
    standings = "this person is obess";
  }
  else if (bmi > 40)
  {
    standings = "this person is severly obess";
  }
  else
  {
  standings = "this person does not exist";
  }
}
bmiInterpretation();
console.log(standings);

