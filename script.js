let fs = require('fs');

const myArgs = process.argv.slice(2);

let fileName = myArgs[0];
let fileContents = myArgs[1];

fs.writeFile(fileName, fileContents, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 
  