const fs = require('fs');

// const book = {
//     title: 'Siddhartha',
//     author: 'Hermann Hesse'
// }

const noteDataBuffer = fs.readFileSync('1-json.json');
const noteDataObj = JSON.parse(noteDataBuffer);
noteDataObj.name = 'Mauro';
noteDataObj.age = '23';
const obj2Str = JSON.stringify(noteDataObj);
fs.writeFileSync('1-json.json', obj2Str);









