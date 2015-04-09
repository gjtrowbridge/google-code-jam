// Boiler plate code to read in files / spit out output
var fs = require('fs');
boilerPlateHelpers = {};

if (process.argv.length !== 4) {
  console.log('Usage is node code-jame-boilerplate [input file] [output file]');
  return false;
}
var inputFile = process.argv[2];
var outputFile = process.argv[3];

boilerPlateHelpers.readFileAsyncByLine = function(fn) {

  var rs = fs.createReadStream(inputFile);
  var remaining = '';

  rs.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      fn(line);
      index = remaining.indexOf('\n');
    }
  });

  rs.on('end', function() {
    if (remaining !== '') {
      fn(remaining);
    }
  });

};

boilerPlateHelpers.readFileSync = function() {
  var data = fs.readFileSync(inputFile, 'utf8');
  return data;
};

boilerPlateHelpers.writeToFile = function(str) {
  fs.writeFileSync(outputFile, str);
};

boilerPlateHelpers.appendToFile = function(str, suffix) {
  if (suffix === undefined) {
    suffix = '\n';
  }
  fs.appendFileSync(outputFile, str + suffix);
};

module.exports = boilerPlateHelpers;
