const file = require('fs');

//create a file
let fileName = 'textfile.txt'
file.writeFile(fileName, "", (err) => {
    if (err) throw err;
    console.log(fileName + ' created');
});