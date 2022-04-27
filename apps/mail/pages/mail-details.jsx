import { mailService } from "../services/mail-service.js"

export class MailDetails extends React.Fragment {

    state = {
        mail: {}
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const { mailId } = this.props.match.params
        if (!mailId) return
        mailService.getById(mailId)
            .then(mail => this.setState({ mail }))
    }

    render() {

        return
    }
}