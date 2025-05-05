// call back functions

//function one
function come (){
    console.log("he is to come tommorrow");
}

// function two

function go (){
    console.log("he is going tommorrow");
}
go();//the go function returns first because it is called first though declared first
come();// returns last because it is called last though declared first.

// example two 

function how (){
    console.log("hello") ;
}

// function two
function what(){
    console.log("good morning") ;
}

// calling the function
what();
how();

//  callback functions
function starts (someone){
    console.log(someone);
}

function calculate(num1 , num2, callLater){
let all = num1 * num2;
callLater(all);
}

calculate(5, 5, callLater);
//console.log()