const fs = require('fs');

// const book = {
//     title: 'Siddhartha',
//     author: 'Hermann Hesse'
// }

// const noteDataBuffer = fs.readFileSync('1-json.json');
// const noteDataObj = JSON.parse(noteDataBuffer);
// noteDataObj.name = 'Mauro';
// noteDataObj.age = '23';
// const obj2Str = JSON.stringify(noteDataObj);
// fs.writeFileSync('1-json.json', obj2Str);


const arr = [{ "title": "b" }, { "title": "a" }, { "title": "c" }, { "title": "d" }, { "title": "e" }, { "title": "f" }]

arr.forEach(elem => {
    if (elem.title === "b") {
        console.log(true)
    } else {
        console.log(false)
    }
})

// console.log(arr.indexOf('d'))
// console.log(arr.indexOf('h'))

// let arrPiece1 = arr.slice(0, arr.indexOf('d'))
// let arrPiece2 = arr.slice(arr.indexOf('d'))

// arrPiece2.shift()

// const finalArr = arrPiece1.concat(arrPiece2)
// console.log(finalArr)

// console.log(arrPiece1)
// console.log(arrPiece2)







