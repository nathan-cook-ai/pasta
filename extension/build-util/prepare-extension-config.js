var fs = require('fs');
console.log("HI");

var data = fs.readFileSync('filelist.txt', 'utf-8');
var newValue = data.replace(/^\./gim, 'myString');
fs.writeFileSync('filelistSync.txt', newValue, 'utf-8');

console.log('Bad magic');