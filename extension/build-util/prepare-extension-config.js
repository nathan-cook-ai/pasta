import * as fs from 'node:fs';

var data = fs.readFileSync('package.json', 'utf-8');
var newValue = data.replace('"main": "./pack/src/extension.cjs"', '"main": "./pack/src/extension.js"');
fs.writeFileSync('package.json', newValue, 'utf-8');

console.log('Bad magic');