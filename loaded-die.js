var rolldie = function() {
  return Math.floor(1 + Math.random() * 6);
}

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index = 0;

  return function() {

    return list[index++];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie() === 5);
console.log(rollLoadedDie() === 4);
console.log(rollLoadedDie() === 6);
console.log(rollLoadedDie() === 1);

