const fs = require('fs');
const chalk = require('chalk');

function getNotes(){
    return 'Your notes...';
};


const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes =  notes.filter( function(note){
        return note.title === title;
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes);
    } else{
        console.log('Note Title Duplicate!')
    }
    
}


const removeNote = function(title){
    const notes = loadNotes();
    let noteIndexToDelete;
    for(let i = 0; i < notes.length;i++){
        if(notes[i].title === title){
            noteIndexToDelete =  i;
            notes.splice(noteIndexToDelete,1);
            saveNotes(notes);
            console.log(chalk.bgGreen('Note Removed!'));
            return
            // i = notes.length;
        }
    } console.log(chalk.bgRed('No Note Removed!'));
    
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e){
        return [];
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}   

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
};