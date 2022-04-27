'use strict'

import { storageService } from '../../../services/storage-service.js'
import { utilService } from '../../../services/util-service.js'

const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
}

const gMails = {
    sentMails: [{
        id: 'e1016',
        subject: 'Miss you!',
        body: 'Wosdfgsdfguld love to catch up sometimes',
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    }, {
        id: 'e1015',
        subject: 'hate you!',
        body: 'Would love to catch upfdgs sometimes',
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    }],
    receivedMail: [{
        id: 'e1013',
        subject: 'Love you!',
        body: 'Would love to catch up sometdsfghsdfhimes',
        isRead: false,
        receivedAt: 1551133930594,
        from: 'momo@momo.com'
    }]
}

const loggedInUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}