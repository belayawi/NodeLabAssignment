module.exports.drive = function () {
  console.log('The car moves forward');
};
module.exports.turn = function (degrees) {
  console.log(`The car turns ${degrees}`);
};
module.exports.Break = function () {  // lower case b for break is a javascript keyword 
  console.log('the car stops');
};
