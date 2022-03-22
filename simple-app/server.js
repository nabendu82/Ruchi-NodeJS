const fs = require('fs');

function writeAppend(){
    console.log('Writing and appending to file...');
    fs.writeFileSync('notepad.txt', 'Welcome to NodeJS.');
    fs.appendFileSync('notepad.txt', 'NodeJS is JavaScript backend library');
}

module.exports = writeAppend;
