import { mailService } from "../services/mail-service.js"

export class MailDetails extends React.Component {

    state = {
        mail: {}
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const { mailId } = this.props.match.params
        mailService.getById(mailId)
            .then(mail => this.setState({ mail }))
    }

    returnToList = () => {
        this.props.history.goBack()
    }

    onDeleteMail = () => {
        mailService.remove(this.state.mail.id).then(this.returnToList)
    }

    render() {
        const { mail } = this.state
        return <section className="mail-details">
                <h3>{mail.subject}</h3>
                <p><small>From: </small> {mail.from} <br></br>
                    <small>To:</small> {mail.to}
                </p>
                {/* <p></p> */}
                <p><small>Name: </small> {mail.name}</p>
                <p><small>Body:</small> {mail.body}</p>
                <div className="mail-details-btn">
                    <button onClick={this.returnToList}>Back</button>
                    <button onClick={this.onDeleteMail}>Delete</button>
                </div>
        </section>
    }
}