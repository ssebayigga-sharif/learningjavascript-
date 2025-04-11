//indexOf() string search method
let myJany = "when i went to the market i was surprised to find frozen fish";
console.log(myJany.indexOf("i"));
//returns a negative 1 when the valuee is not in the string
console.log(myJany.indexOf("x"));
//lastindexof()
let schoo = "as she was going home she lost her books";
console.log(schoo.lastIndexOf("she"));
//search method
let bad = "they bad guys have bad behaviours";
console.log(bad.search("bad"));
//match method
let rained = "the rain rained in the plain";
let x = rained.match("rain");
console.log(x);
//Match all method
let raine = "the rain rained in the plain";
console.log( raine.matchAll("rain"));
//the includes method
let sherri = "the name of his brother is sharif";
console.log(sherri.includes("name"));
let part = "parts are done";
console.log(part.includes("is"));
//starts with method
//can return true
let myOwn = "she has stolen my car";
console.log(myOwn.startsWith("shes"));
//the starts with method takes parameters
//when the parameter persed is the right index at which the word starts from it returns true
let jon = "he almost died as he was going home";
console.log(jon.startsWith("home",31 ));
// can return false
let hi = "she died two years ago";
console.log(hi.startsWith("a"));
//ends with mwthod
// also can return true|| false
let kam = "she might come next month";
console.log(kam.endsWith("month"));
//returning false
let r = "it last rained seven months ago";
console.log(r.endsWith("it"));
//