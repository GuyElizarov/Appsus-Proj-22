'use strict'

import { storageService } from '../../../services/storage-service.js'
import { utilService } from '../../../services/util-service.js'


export const mailService = {
    query,
    getById
}


const MAIL_KEY = 'mailDB'

const gMails = [{
        id: 'e101',
        name: 'Yaron Bitton',
        subject: 'Save My Compony!',
        body: 'Pleas we need your skills',
        isRead: false,
        sentAt: 1551133930594,
        from: 'yaron@momo.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e102',
        name: 'Nadav Nadav',
        subject: 'Top Secret',
        body: 'I am PUKI!!!',
        isRead: false,
        sentAt: 1551133930594,
        from: 'nadav@momo.com',
        to: 'user@appsus.com',
    },
    {
        id: 'e103',
        name: 'freedom',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        from: 'freedom@muki.co.il',
        to: 'user@appsus.com',
    },
    {
        id: 'e104',
        name: 'Guy',
        subject: 'I need a loan..',
        body: 'pleas',
        isRead: false,
        sentAt: 1551133930594,
        from: 'user@appsus.com',
        to: 'momo@momo.com',
    }

]

const loggedInUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}


function query(criteria) {
    let mails = _loadFromStorage()
    if (!mails || !mails.length) {
        mails = JSON.parse(JSON.stringify(gMails))
        _saveToStorage(mails)
    }
    if (criteria) {
        let { labels, isStared, isRead, txt, status } = criteria
        // if (!minPrice) minPrice = 0
        // if (!maxPrice) maxPrice = Infinity
        // books = books.filter(book => {
        //     const { amount } = book.listPrice
        //     return (book.title.toLowerCase().includes(title.toLowerCase()) &&
        //         amount >= minPrice &&
        //         amount <= maxPrice)
        // })
    }
    return Promise.resolve(mails)
}

function getById(mailId) {
    const mails = _loadFromStorage()
    const mail = mails.find(mail => mailId === mail.id)
    return Promise.resolve(mail)
}

function _saveToStorage(mails) {
    storageService.saveToStorage(MAIL_KEY, mails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(MAIL_KEY)
}