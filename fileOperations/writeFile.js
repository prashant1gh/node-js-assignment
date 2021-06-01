const file = require('fs');


//write to a file
let fileName = 'new-file.txt'
let text2write = 'apple \n ball \n cat'

file.writeFile(fileName, text2write, (err) => {
    if (err) throw err;
    console.log('write operation successful');
});