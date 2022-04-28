import { utilService } from '../../../services/util-service.js'

const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {
    const { subject,name, from, sentAt } = mail
    const date = new Date(sentAt)
    const month = utilService.padNum(date.getMonth() + 1)
    const day = utilService.padNum(date.getDay())
    return <Link to={`/mail/${mail.id}`}>
        <div className="mail-preview">
            <p><small>from:</small> {from}</p>
            <p>{name}</p>
            <p><small>sub:</small> {subject}</p>
          
            <p> {day}/{month} </p>
        </div>
    </Link>
}