const fs = require('fs');

function createNote(title, body){
    const notes = uploadNotes(); 
    console.log(notes)
    notes.push({ title, body });
    console.log(notes);
    console.log(JSON.stringify(notes))
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const uploadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

module.exports = { createNote };