var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array, element) {
  kittens.push("Ralph");
}
function destructivelyPrependKitten(array, element) {
  kittens.unshift("Bob");
}
function destructivelyRemoveLastKitten(array) {
  kittens.pop();
}
function destructivelyRemoveFirstKitten(array) {
  kittens.shift();
}
function appendKitten(name) {
  var newKitten = [...kittens, name];
  return newKitten;
}
function prependKitten(name) {
  var newKittens = [name, ...kittens];
  return newKittens;
}
function removeLastKitten(array) {
  var newCat = kittens.slice(3);
  return newCat;
}
function removeFirstKitten()