//we use if to specify code to be executed if the specified condition is true
function age (){
    let age = 21;
    if (age > 18){//often used when the condition is only and only true
        console.log("he is old enough to eat lemon");
    }
    
};age();

//if and operator
function and (){
    const nam = "sharif";
    const area = "kampala";//the && operator returns false if one or both conditions are false
    if (nam.length <= area.length && nam.at(2) == area.at(1)) {
        console.log("i may be right");// the && operator only returns true when both conditions are true
    
    }
    
};and();

let went = "i went to school";
if(went == "i went to school"){
    console.log("she would be a professor");
};

//the else  //specifies code to be executed when the condition is false
let fuel = 41;
let tank = " ";
if (fuel > 50){//this is the condition
    tank = "the tank is okay";//returned if the condition is //returned since the condition is true
}else{
    tank = "the tank is in danger";//returned if the condition is false
};
console.log(tank);

// if and  else combined

const students = 100;
let classs = " ";
if(students < 90){
    classs = "the class is quite okay";
}else {
    classs = "the class needs more students";//returned since the condition is false
};
console.log(classs);


// the if , elseif;

let cars = 6;

let owner;
if (cars < 1){
    owner = "cars are not enough";//returned if the first condition is true
}if (cars >= 3) {
    owner = "we might use those ones for now";//returned if the second condition is true and the first one is false
} else {
    owner = "we need to get more cars ";//returned if both conditions are false
};

console.log(owner);


//returning randomly

let result;
if(Math.random() + 0.5){
    result = "i dont eat meat at all";
}else{
    result = "i can take meat soup maybe";
};
console.log(result);