const chalk = require('chalk')
const fs = require('fs');
const { required } = require('yargs');

const getNotes = note => console.log(note)

const addNotes = (title, body) => {
    const notes = loadNotes(title, body);
    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note has been added !'))
    }
    else {
        console.log(chalk.red.inverse('The title is already in use'))
    }
}

const removeNotes = title => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = JSON.parse(dataBuffer)
        let foundFlag = false;
        for (let index = 0; index < dataJSON.length; index++) {
            const element = dataJSON[index];
            if (element.title === title) {
                let arrPiece1 = dataJSON.slice(0, index)
                let arrPiece2 = dataJSON.slice(index)

                arrPiece2.shift()
                const finalArr = arrPiece1.concat(arrPiece2)

                const newNotesJSON = JSON.stringify(finalArr);
                fs.writeFileSync('notes.json', newNotesJSON);

                foundFlag = true;
                console.log(chalk.bgGreen('Note removed!'));
                break
            }
        }
        if (foundFlag === false) {
            console.log("The note \"" + title + "\" is not in the file");
            console.log(chalk.bgRed('No note found!'));
        } else {
            foundFlag = false;
        }

    } catch (e) {
        console.log('There are no notes in the file yet !!')
    }
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
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