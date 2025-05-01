//syntax for json objects
//converting from json to javascript object
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'

//using the perse method
let solution = JSON.parse(text);
console.log(solution);// returns text as an object