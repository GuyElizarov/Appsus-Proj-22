import { utilService } from "../../../services/util-service.js"
import { storageService } from "../../../services/storage-service.js"

export const NoteService = {
    query,
    addNote,
    remove
}


const NOTES_KEY = 'notesDB'
const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#cf7676"
        }
    }, {
        id: "n104",
        type: "note-img",
        info: {
            url: "https://romanelectrichome.com/wp-content/uploads/2018/06/Roman-Electrical-Wiring-Tips-What-is-Hot-Neutral-and-Ground.jpg",
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#cf7676"
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null, todoId: utilService.makeId() },
                { txt: "Coding power", doneAt: 187111111, todoId: utilService.makeId() }
            ]
        },
        style: {
            backgroundColor: "#cf7676"
        }

    },
    {
        id: "n102",
        type: "note-video",
        info: {
            url: "https://www.youtube.com/embed/7A1fNr3KXoM",
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#cf7676"
        }
    }
]


function query(filterBy) {

    let notes = _loadFromStorage()
    if (!notes) {
        notes = gNotes
        _saveToStorage(notes)
        return Promise.resolve(notes)
    } else {
        // if (filterBy) {
        //     let { type, name } = filterBy
        //     if (!type) type = Infinity
        //     notes = notes.filter(book => {
        //         return book.title.includes(name) && book.listPrice.amount < price

        //     })
        // }

        return Promise.resolve(notes)
    }
}

function addNote(note) {
    var notes = _loadFromStorage()
    const newNote = _createNote(note)
    notes = [newNote, ...notes]
    _saveToStorage(notes)
}




function _createNote(note) {
    return {
        id: utilService.makeId(),
        type: note.type,
        isPinned: false,
        info: note.note
    }
}

function remove(noteId) {
    var notes = _loadFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

function _saveToStorage(notes) {
    storageService.saveToStorage(NOTES_KEY, notes)
}
function _loadFromStorage() {
    return storageService.loadFromStorage(NOTES_KEY)
}
