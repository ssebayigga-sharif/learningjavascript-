//objects
const lady = {
    firstName:"shamirah",
    lastName:"nalule",
    age:21,
    city:"kampala",
    parents:{
        mother:"nansubuga",
        father:"mark"
    }
}
//adding a property to my object
lady.nationality = "Ugandan";
//adding a method to my object
lady.fullName = function(){
    return this.firstName + " " + this.lastName + "is the name of the lady u are looking for";
}
//accessing my object
console.log(lady);
//using a loop
for(let l in lady){
    console.log(l);
}
//using a better way of loops
let hand = " ";
for(let[prop , val] of Object.entries(lady)){
    hand += prop + " " + val + " ";
    console.log(hand);
}
//making an object a string
console.log(JSON.stringify(lady));
// making an object an array
console.log(Object.values(lady));

// my object constructor
function Car(name, tyres, color, driver){
    this.name = name;
    this.tyres = tyres;
    this.color = color;
    this.driver = driver || "sudais";
}
//adding a property to the constructor
Car.prototype.seats = 4;
// adding a method to the constructor
Car.prototype.speed = function(speeed, time) {
    return 120 * 80 ;
};

// new objects for the constructor
let ca = new Car("ford",4, "red", "sherrifrollins");
console.log(ca);

 