const yargs = require('yargs');
const note = require('./notes.js');
const notes = require('./notes.js')


yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }

    },
    handler: (argv)=>{
        notes.addNote(argv.title, argv.body)
    }
})



//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv)=>{
        notes.removeNote(argv.title);
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

//create list command
yargs.command({
    command: 'list',
    describe: 'Listing the notes',
    handler: ()=>{
        console.log('Listing the notes')
    }
})
//add, remove, read, list

yargs.parse();
//console.log(yargs.argv);