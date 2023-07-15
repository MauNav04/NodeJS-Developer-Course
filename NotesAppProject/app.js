const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs/yargs')
//const { hideBin } = require('yargs/helpers')

var argv = yargs(process.argv.slice(2))
    //Create an "add" command
    //.usage('Usage: $0 <command> [options]')
    .command('add', '[Add new note]', yargs => {
        return yargs.options({
            'title': {
                describe: 'Title for the note to be added',
                demandOption: true,
                type: 'string',
                string: true
            },
            'body': {
                describe: 'Note Body',
                demandOption: true,
                type: 'string',
                string: true
            }

        })
    }, yargs => {
        notes.addNotes(yargs.title, yargs.body)
    })
    //Create an "remove" command
    .command('remove', '[Remove a note from your file]', yargs => {
        return yargs.option(
            'title', {
            describe: 'Title of the note that will be removed',
            demandOption: true,
            type: 'string',
            string: true
        })
    }, yargs => {
        notes.removeNotes(yargs.title)
    })
    //Create an "read" command
    .command('read', '[Read a given note]', yargs => {
        return yargs.option(
            'title', {
            describe: 'Title of the note you want to read',
            demandOption: true,
            type: 'string',
            string: true
        })
    }, yargs => {
        notes.readNote(yargs.title)
    })
    //Create an "list" command
    .command('list', '[List all the notes in your file]', () => {
        notes.listNotes()
    })
    .parse();

console.log(yargs(process.argv.slice(2)).argv)