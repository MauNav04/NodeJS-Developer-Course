//const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

//notes('Your vote');

//console.log(yargs.argv);

//Create an "add" command
// require('yargs/yargs')(process.argv.slice(2))
//     .command('add', 'Add a new note', () => { }, console.log('Adding a new note'))
//     .argv


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

console.log(yargs(process.argv.slice(2)).argv)


console.log(chalk.green('Success!'));