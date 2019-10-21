const Note = require('../models/Note');

const notesCtrl = {};




notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNote = async (req, res) => {

    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    })
    console.log(newNote);

    await newNote.save();

    res.json({
        message: 'Nota guardada'
    })
};

notesCtrl.getNote = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findById(id)
    console.log(id);

    res.json({
        message: 'Nota obtenida',
        note
    })
};

notesCtrl.updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content, author } = req.body;
    console.log(id, req.body);
    await Note.findByIdAndUpdate(id, {
        title,
        content,
        author
    });

    res.json({ message: 'Nota actualizada' })
};

notesCtrl.deleteNote = async (req, res) => {
    const { id } = req.params;
    await Note.findByIdAndDelete(id)

    res.json({ message: 'Nota eliminada' })
};


module.exports = notesCtrl;