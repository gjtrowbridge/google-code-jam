var gcj = require('./code-jam-boilerplate');

gcj.readFileAsyncByLine(function(line) {
  gcj.appendToFile(line + '||YEAAAAHHH');
});
console.log(gcj.readFileSync());

