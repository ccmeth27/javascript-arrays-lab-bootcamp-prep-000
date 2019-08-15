var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array, element) {
  var newKittens = kittens.unshift("Ralph");
  return newKittens;
}
function destructivelyPrependKitten(array, element) {
  var newCats = kittens.push("Bob");
  return newCats;
}