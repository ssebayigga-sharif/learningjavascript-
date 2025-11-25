//using object.create method
const elfWeapon = {
  attack() {
    return this.name + " attack with " + this.weapon;
  },
};
//elf function
function createElf(name, weapon) {
  const elf = Object.create(elfWeapon);

  (elf.name = name), (elf.weapon = weapon);
  return elf;
}
const suubi = createElf("suubi", "fire");
console.log(suubi.attack());

//part two is for the constructor functions
function Elfs(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}
//adding a method to the constructor

Elfs.prototype.attack = function () {
  return "attack with " + this.weapon;
};
const kamoga = new Elfs("kamoga", "fire");
console.log(kamoga.attack());

let a = new Number(6);
console.log(a);
console.log(typeof a);
// es6 classes
//private and public class words
