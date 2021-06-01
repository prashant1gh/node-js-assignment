const file = require('fs');

//read content from a file
file.readFile('./names.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})