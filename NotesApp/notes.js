const fs = require("fs");
const chalk = require("chalk");
const listNotes = () => {
    console.log(chalk.underline.bold.green("Your notes: "));
    const notes = loadNotes();
    notes.forEach((note, i) => {
        console.log(i + 1 + ".", note.title);
    });
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title,
            body,
        });
        saveNotes(notes);
        console.log(chalk.green("New note added"));
    } else {
        console.log(chalk.red("Note title taken"));
    }
};

const editNote = (title, body) => {
    const notes = loadNotes();
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].title === title) {
            notes[i].body = body;
            saveNotes(notes);
            console.log(chalk.green("Note edited"));
            return;
        }
    }
    console.log(chalk.red("No note with that title"));
};

const editNumberNote = (number, body) => {
    if (loadNotes().length >= number) {
        editNote(loadNotes()[number - 1].title, body);
    } else {
        console.log(chalk.red("No note with that index"));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => {
        return note.title !== title;
    });
    if (newNotes.length === notes.length) {
        console.log(chalk.red("No note found"));
        return;
    }
    saveNotes(newNotes);
    console.log(chalk.green("Note removed"));
};

const removeNumberNote = (number) => {
    if (loadNotes().length >= number) {
        removeNote(loadNotes()[number - 1].title);
    } else {
        console.log(chalk.red("No note with that index"));
    }
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((n) => n.title === title);
    if (note) {
        console.log(chalk.underline.bold.green(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red("No note with specified title found"));
    }
};

const readNumberNote = (index) => {
    const notes = loadNotes();
    if (notes.length >= index) {
        readNote(notes[number - 1].title);
    } else {
        console.log(chalk.red("No note with that index"));
    }
};

const saveNotes = (notes) => {
    const json = JSON.stringify(notes);
    fs.writeFileSync("notes.json", json);
};

const loadNotes = () => {
    try {
        const buffer = fs.readFileSync("notes.json");
        const json = buffer.toString();
        return JSON.parse(json);
    } catch (e) {
        return [];
    }
};

module.exports = {
    listNotes,
    addNote,
    editNote,
    editNumberNote,
    removeNote,
    removeNumberNote,
    readNote,
    readNumberNote,
};
