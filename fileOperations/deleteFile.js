const file = require('fs');


//delete a file
let fileName = 'names.txt';
file.unlink(fileName, (err) => {
    if (err) throw err;
    console.log(fileName + ' is deleted');
});