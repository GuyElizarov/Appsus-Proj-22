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
        name: 'Yaron',
        subject: 'Save My Compony!',
        body: 'Pleas we need your skills',
        isRead: true,
        sentAt: 1551133930594,
        from: 'yaron@momo.com',
        to: 'user@appsus.com',
        status: 'inbox'
    },
    {
        id: 'e102',
        name: 'Nadav',
        subject: 'Top Secret',
        body: 'I am PUKI!!!',
        isRead: true,
        sentAt: 1551133930594,
        from: 'nadav@momo.com',
        to: 'user@appsus.com',
        status: 'inbox'
    },
    {
        id: 'e103',
        name: 'Freedom',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        from: 'freedom@muki.co.il',
        to: 'user@appsus.com',
        status: 'trash'
    },
    {
        id: 'e104',
        name: 'Guy',
        subject: 'I need a loan...',
        body: 'pleas',
        isRead: false,
        sentAt: 1551133930594,
        from: 'user@appsus.com',
        to: 'momo@momo.com',
        status: 'sent'
    },
    {
        id: 'e105',
        name: 'Guy',
        subject: 'How you doin😉',
        body: 'pleas',
        isRead: false,
        isStared: false,
        sentAt: 1551133930594,
        from: 'user@appsus.com',
        to: 'lovly@momo.com',
        status: 'draft'
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
        let { isStared, isRead, txt, status } = criteria


        mails = mails.filter(mail => {

            if (isRead === "all") return (isTxtInMail(txt, mail))
            return (isTxtInMail(txt, mail) && mail.isRead === isRead)
                // return (isTxtInMail(txt, mail) && mail.isRead === isRead && mail.status === status)
                // return (isTxtInMail(txt, mail) && mail.isRead === isRead && mail.status === status && mail.isStared===isStared)
        })
    }
    return Promise.resolve(mails)
}

function isTxtInMail(txt, mail) {
    for (const key in mail) {
        if (typeof(mail[key]) === 'string' && (mail[key]).toLowerCase().includes(txt.toLowerCase())) {
            return true
        }
    }
    return false
}

function getById(mailId) {
    const mails = _loadFromStorage()
    const mail = mails.find(mail => mailId === mail.id)
    return Promise.resolve(mail)
}

function _createMail(to, subject, body) {
    return {
        id: utilService.makeId(),
        name: loggedInUser.name,
        subject,
        body,
        // isRead: false,
        sentAt: 1551133930594,
        from: loggedInUser.email,
        to,
    }
}


function _saveToStorage(mails) {
    storageService.saveToStorage(MAIL_KEY, mails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(MAIL_KEY)
}