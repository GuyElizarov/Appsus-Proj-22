import { utilService } from '../../../services/util-service.js'

const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {
    const { subject, body, from, sentAt } = mail
    const date = new Date(sentAt)
    const month = utilService.padNum(date.getMonth() + 1)
    const day = utilService.padNum(date.getDay())
    return <Link to={`/mail/${mail.id}`}>
        <div className="mail-preview">
            <p>{from}</p>
            <p>{subject}</p>r
            <p>{body}</p>
            <p> {day}/{month} </p>
        </div>
    </Link>
}