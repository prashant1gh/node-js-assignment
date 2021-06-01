const file = require('fs');


let fileName = 'names.txt'
let text2Alter = 'aeroplane\nball\ncat'

//alter file content
file.writeFile(fileName, text2Alter, (err) => {
    if (err) throw err;
    console.log('file content altered');
});