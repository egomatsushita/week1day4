var wrapLog = function(callback, name) {

};

var area = function(x, y) {
  return x * y;
};

var logArea = wrapLog(area, "area");

logAra(5, 3); // area(5, 3) => 15
logAra(3, 2); // area(3, 2) => 6

var volume = function(x, y, z) {
  return x * y * z;
};

var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 20
logVolume(3, 2, 4); // volume(3, 2, 4) => 24
