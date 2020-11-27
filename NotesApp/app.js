const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
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
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
})
yargs.command({
    command: "remove",
    describe: "Remove a note with specified title",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})
yargs.command({
    command: "removeNumber",
    describe: "Remove a note with specified index",
    builder: {
        index: {
            describe: "Note number",
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        notes.removeNumberNote(argv.index);
    }
})
yargs.command({
    command: "edit",
    describe: "Edit a note with specified title",
    builder: {
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
    handler: (argv) => {
        notes.editNote(argv.title, argv.body);
    }
})
yargs.command({
    command: "editNumber",
    describe: "Edit a note with specified index",
    builder: {
        index: {
            describe: "Note index",
            demandOption: true,
            type: 'number'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.editNumberNote(argv.index, argv.body);
    }
})
yargs.command({
    command: "list",
    describe: "List your notes",
    handler: () => {
        notes.listNotes();
    }
})
yargs.command({
    command: "read",
    describe: "Read a note with specified title",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
});
yargs.command({
    command: "readNumber",
    describe: "Read a note with specified index",
    builder: {
        index: {
            describe: "Note index",
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        notes.readNumberNote(argv.index)
    }
});
yargs.parse();