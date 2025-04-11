// array methods
let heroes = ["batman", "superman", "flash" ];
console.log(heroes);  // accessing my array
// method one
console.log(heroes.length);  // accessing my array
// method two
console.log(heroes.lastIndexOf('superman'));
// method three
heroes.push("wonderwoman", "aquaman"); //  adds at rhe end;
console.log(heroes);
// method three
heroes.pop();  // deletes at the end
console.log(heroes);
// method four
heroes.shift(); // deletes at the begining
console.log(heroes);
//method five
heroes.unshift('greenlanter'); //adds at the begining
console.log(heroes);
// method six
heroes.sort();
console.log(heroes);  // alphabetical order