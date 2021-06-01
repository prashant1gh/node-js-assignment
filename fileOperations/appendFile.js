const file = require('fs');

//alter file content
let fileName = 'names.txt'
let text2Append = 'dog\nelephant'
file.appendFile(fileName, text2Append, (err) => {
    if (err) throw err;
    console.log('append operation successful');
});