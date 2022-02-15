const yargs = require("yargs");
const {addNote, printNotes, removeNote} = require('./notes-controller')

yargs.command({
  command: "add",
  describe: "Add new note",
  builder:{
    title:{
      type:'string',
      describe: 'new title',
      demandOption: true
    }
  },
  handler({title}){
    addNote(title);
  }
})

yargs.command({
  command: "print",
  describe: "Get notes",
  async handler(){
    console.log(await printNotes());
  }
})

yargs.command({
  command:'remove',
  describe: 'remove note by id',
  builder: {
    id:{
      type:'string',
      describe:'id',
      demandOption:true
    }
  },
  handler({id}){
    removeNote(id)
  }

})
yargs.parse()