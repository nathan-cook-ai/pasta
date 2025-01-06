var fs = require('fs');
console.log("HI");

var data = fs.readFileSync('filelist.txt', 'utf-8');
var newValue = data.replace('"main": "./pack/src/extension.cjs"', '"main": "./pack/src/extension.js"');
fs.writeFileSync('filelistSync.txt', newValue, 'utf-8');

console.log('Bad magic');