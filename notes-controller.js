const fs = require('fs/promises')

async function addNote(title){
  const notes = await getNotes()

  const newNote = {
    id: Date.now().toString(),
    title: title
  }
  notes.push(newNote)
  await fs.writeFile('./bd.json', JSON.stringify(notes))
}
async function getNotes(){
  const notes = await fs.readFile('./bd.json', {encoding:'utf-8'})
  return JSON.parse(notes)
}

async function printNotes(){
  const notes = await getNotes()
  return notes
}

async function removeNote(id){
  const notes = await getNotes()
  const newNotes = notes.filter(note => note.id !== id)
  fs.writeFile('./bd.json', JSON.stringify(newNotes))
  return notes
}
module.exports = {
  addNote,
  printNotes,
  removeNote 
  
}