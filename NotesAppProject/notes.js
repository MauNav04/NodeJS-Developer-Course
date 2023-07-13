const fs = require('fs');

const getNotes = function (note) {
    console.log(note);
}

const addNotes = function (title, body) {
    const notes = loadNotes(title, body);
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('Note has been added !')
    }
    else {
        console.log('The title is already in use')
    }
}

const removeNotes = function (title) {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = JSON.parse(dataBuffer)
        if (dataJSON.includes(title)) {
            let arrPiece1 = dataJSON.slice(0, indexOf(title))
            let arrPiece2 = dataJSON.slice(indexOf(title))

            arrPiece2.shift()
            const finalArr = arrPiece1.concat(arrPiece2)

            console.log(finalArr)
        }

    } catch (e) {
        console.log('There are no noter in the file yet !!')
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function (title, body) {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = JSON.parse(dataBuffer)
        return dataJSON
    } catch (e) {
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}