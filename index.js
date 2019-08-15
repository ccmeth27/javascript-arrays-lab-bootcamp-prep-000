var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array, element) {
  var newKittens = kittens.push("Ralph");
  return newKittens;
}
function destructivelyPrependKitten(array, element) {
  var newCats = kittens.unshift("Bob");
  return newCats;
}
function destructivelyRemoveLastKitten(array) {
  kittens.pop();
}
function destructivelyRemoveFirstKitten(array) {
  kittens.shift();
}