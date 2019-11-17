const fs = require('fs');
const chalk = require('chalk');

const getNotes = ()=>{
    return 'Your notes...';
};


const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes =  notes.filter( (note) => note.title === title )

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes);
        console.log(chalk.bgGreen('New Note Added'));
    } else{
        console.log(chalk.bgRed('Note Title Duplicate!'));
    }
    
}


const removeNote = (title)=>{
    const notes = loadNotes();
    let noteIndexToDelete;
    for(let i = 0; i < notes.length;i++){
        if(notes[i].title === title){
            noteIndexToDelete =  i;
            notes.splice(noteIndexToDelete,1);
            saveNotes(notes);
            console.log(chalk.bgGreen('Note Removed!'));
            return
        }
    } console.log(chalk.bgRed('No Note Removed!'));
    
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e){
        return [];
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}   

const listNotes = () => JSON.parse(fs.readFileSync('notes.json').toString());

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};