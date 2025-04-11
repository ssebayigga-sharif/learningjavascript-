//temperate strings use backtics
let text = `hello world !!!!!`;
console.log(text);
//temperate strings allow both single and double quotes
let sentencs = `he will call "sharif" and we will find 'john' tommorrow`;
console.log(sentencs);
//temperate strings allow multiline strings
let lines = `kagnda will come
joshua will come
eliz will come
essie will also come
the car will be enough`;
console.log(lines);
//temperate strings allow interpolation
let car = "ford";
let driver = "sharif";
let itDriver = `${driver} is the one that drives ${car}`;
console.log(itDriver);
//we can calculate using tempelates
let time = 24;
let speed = 160;
let distance = `he covered ${time * speed} km`;
console.log(distance);
//multi lines
let line = `she eats matooke
she eats meat
she likes football
she likes netball
she swallows slowly
"sheira" is the lady we talking about`;
console.log(line);
//interpolation in strings
let birds = 9000;
let sam = "samuel";
let heOwns = `all of the ${birds} ducks belong to ${sam}`;
console.log(heOwns);