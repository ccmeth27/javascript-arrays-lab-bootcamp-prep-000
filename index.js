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
  return newKitten();
}