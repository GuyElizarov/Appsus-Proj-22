import { utilService } from '../../../services/util-service.js'
import { MailStar } from './mail-star.jsx'

const { Link } = ReactRouterDOM

export function MailPreview({ mail, onDeleteMail, onToggleStar }) {
    const { subject, name, from, sentAt, id, isRead } = mail
    const date = new Date(sentAt)
    const month = utilService.padNum(date.getMonth() + 1)
    const day = utilService.padNum(date.getDay())

    const deleteMail = (ev) => {
        ev.stopPropagation()
        onDeleteMail(id)
    }

    return <Link to={`/mail/${id}`}>
        <div className="mail-preview">
            <p><small>from:</small> {from}</p>
            <p>{name}</p>
            <p><small>sub:</small> {subject}</p>

            <p> {day}/{month} </p>
            {mail && <MailStar mail={mail} onToggleStar={onToggleStar} />}
            <p>{isRead ? '📃' : '✉'}</p>
            <button onClick={(ev) => deleteMail(ev)}>🗑</button>
        </div>
    </Link>
}