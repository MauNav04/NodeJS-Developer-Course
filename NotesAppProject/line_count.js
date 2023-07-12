const yargs = require('yargs/yargs')

var argv = yargs(process.argv.slice(2))
    //.usage('Usage: $0 <command> [options]')
    .command('count', 'Count the lines in a file', function (yargs) {
        console.log('counting...')
    })
    .command('add', 'Add new object', function (yargs) {
        console.log('Adding new object')
    })
    .argv;

// var fs = require('fs');
// var s = fs.createReadStream(argv.file);

// var lines = 0;
// s.on('data', function (buf) {
//     lines += buf.toString().match(/\n/g).length;
// });

// s.on('end', function () {
//     console.log(lines);
// });