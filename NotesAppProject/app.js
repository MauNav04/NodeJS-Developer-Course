//const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs/yargs')
//const { hideBin } = require('yargs/helpers')

//notes('Your vote');

var argv = yargs(process.argv.slice(2))
    //Create an "add" command
    //.usage('Usage: $0 <command> [options]')
    .command('add', '[Add new note]', function (yargs) {
        return yargs.options({
            'title': {
                describe: 'Note Title',
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
    }, function (yargs) {
        console.log('Title: ' + yargs.title + '\n' + 'Body: ' + yargs.body)
    })
    //Create an "remove" command
    .command('remove', '[Remove a note from your file]', function (yargs) {
        console.log('Removing the note')
    })
    //Create an "read" command
    .command('read', '[Read a given note]', function (yargs) {
        console.log('Opening the note...')
    })
    //Create an "list" command
    .command('list', '[List all the notes in your file]', function (yargs) {
        console.log('Listing notes...')
    })
    .parse();


// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     handler: function () {
//         console.log('Adding a new note!!')
//     }
// })
// yargs.command({
//     command: 'remove',
//     describe: 'Removes a note',
//     handler: function () {
//         console.log('Removing the note')
//     }
// })
// yargs.command({
//     command: 'list',
//     describe: 'Displays all the notes',
//     handler: function () {
//         console.log('Displaying notes')
//     }
// })
// yargs.command({
//     command: 'read',
//     describe: 'Opens a note',
//     handler: function () {
//         console.log('Opening the note')
//     }
// })

//checkCommands(yargs, argv, 1);


console.log(yargs(process.argv.slice(2)).argv)


console.log(chalk.green('Success!'));