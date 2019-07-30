// const fs = require('fs')
// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create a add command
yargs.command({
    command: 'add',
    describe: 'Add a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'String'
        },
        body: {
            description: 'This is a new note!',
            demandOption: 'true',
            type: 'String'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create a list command
yargs.command({
    command: 'list',
    describe: 'Lists notes!',
    handler(argv) {
        notes.listNotes()
    }
})

// Create a read command
yargs.command({
    command: 'read',
    describe: 'Read a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)