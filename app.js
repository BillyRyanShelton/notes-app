const yargs = require('yargs');
const getNotes = require('./notes.js');


yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: ()=>{
        console.log('Adding a new note!');
    }
})



//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: ()=>{
        console.log('Removing the note')
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: ()=>{
        console.log('Reading the note')
    }
})

//create remove command
yargs.command({
    command: 'list',
    describe: 'Listing the notes',
    handler: ()=>{
        console.log('Listing the notes')
    }
})
//add, remove, read, list


console.log(yargs.argv);