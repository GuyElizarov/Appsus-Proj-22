import { utilService } from '../../../services/util-service.js'
import { MailStar } from './mail-star.jsx'
import { Loader } from '../../../cmps/loader.jsx'

const { Link } = ReactRouterDOM

export class MailPreview extends React.Component {


    state = {
        mail: null
    }

    componentDidMount() {
        this.setState({ mail: this.props.mail })
    }

    deleteMail = (ev, id) => {
        ev.preventDefault()
        this.props.onDeleteMail(id)
    }
    render() {

        const { mail } = this.state
        if (!mail) return <Loader />
        const { subject, name, from, sentAt, id, isRead } = mail

        const date = new Date(sentAt)
        const month = utilService.padNum(date.getMonth() + 1)
        const day = utilService.padNum(date.getDay())

        const { onToggleStar } = this.props


        return <Link to={`/mail/${id}`}>
            <div className="mail-preview">
                <p><small>from:</small> {from}</p>
                <p>{name}</p>
                <p><small>sub:</small> {subject}</p>

                <p> {day}/{month} </p>
                {mail && <MailStar mail={mail} onToggleStar={onToggleStar} />}
                <p>{isRead ? '📃' : '✉'}</p>
                <button onClick={(ev) => this.deleteMail(ev, id)}>🗑</button>
            </div>
        </Link>
    }
}
