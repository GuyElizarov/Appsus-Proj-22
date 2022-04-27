import { utilService } from "../../../services/util-service.js"
import { storageService } from "../../../services/storage-service.js"

export const NoteService = {
    query
}


const NOTES_KEY = 'notesDB'
const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    }, {
        id: "n102",
        type: "note-img",
        info: {
            url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-www.oktopost.com%2Fblog%2Fwp-content%2Fuploads%2F2021%2F02%2FHero-Elf4IhEXUAApPJQ.jpeg&imgrefurl=https%3A%2F%2Fwww.oktopost.com%2Fblog%2Ftop-11-social-media-meme-ideas-tools-2021%2F&tbnid=A18Nir-EY2_TPM&vet=12ahUKEwi72M6vqLT3AhVMQRoKHUeYB2EQMygAegUIARCWAQ..i&docid=SPAgxhUr6qmWtM&w=700&h=468&q=meme&ved=2ahUKEwi72M6vqLT3AhVMQRoKHUeYB2EQMygAegUIARCWAQ",
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]

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


function _saveToStorage(notes) {
    storageService.saveToStorage(NOTES_KEY, notes)
}
function _loadFromStorage() {
    return storageService.loadFromStorage(NOTES_KEY)
}
