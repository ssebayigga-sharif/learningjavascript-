//getting the day of the week we are in
switch(new Date().getDay()){
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thursday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
};
console.log("today is ", day);

//getting the year
let month = ' ';
switch(new Date().getMonth()){
    case 0:
        month = " january";
        break;
    case 1:
        month = " february";
        break;
    case 2:
        month = " march";
        break;
    case 3:
        month = " april";
        break;
    case 4:
        month = " may";
        break;
    case 5:
        month = " june";
        break;
    case 6:
        month = " july";
        break;
    case 7:
        month = " august";
        break;
    case 8:
        month = " september";
        break;
    case 9:
        month = " october";
        break;
    case 10:
        month = " november";
        break;
    case 11:
        month = " december";
        break;
        
};
console.log(month);

switch (x = "5"){
    case 0:
        console.log( 55 <= x);
        break;
    case 1:
        console.log( "5" === x);
        break;
    case 2:
        console.log( 4 >= x);
        break;
    case 3:
        console.log( "sharif" == x);
        break;
    case 4:
        console.log( "55" ===bx);
        break;
        
        default:
            console.log("there is no match");
};