import { eventBusService } from '../../../services/event-bus-service.js'
import { mailService } from '../services/mail-service.js'

const { withRouter } = ReactRouterDOM

class _MailCompose extends React.Component {

    state = {
        isComposeOpen: false,
        mail: null
    }

    componentDidMount() {
        eventBusService.on('onOpenCompose', this.toggleComposeModal)
        // this.loadMail()
    }

    // loadMail = () => {
    //     const { mailId } = this.props
    //     if (!mailId) return
    //     mailService.getById(mailId)
    //         .then(mail => this.setState({ mail }))
    // }

    toggleComposeModal = () => this.setState({ isComposeOpen: !this.state.isComposeOpen })


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type
        this.setState((prevState) => ({ mail: { ...prevState.mail, [field]: value } }))
    }
    onSendMail = (ev) => {
        ev.preventDefault()
        const target = ev.target
        console.log(ev);
        const mail = {
            to: target[0].value,
            subject: target[1].value,
            body: target[2].value
        }
        console.log("to", mail.to.value);
        if (!mail.to.value) {

            this.toggleComposeModal()
            return
        }

        mailService.send(mail).then(() => {
            this.props.loadMails()
            this.toggleComposeModal()
            this.resetImputes(target)
        })
    }

    resetImputes = (target) => {
        target[0].value = ''
        target[1].value = ''
        target[2].value = ''
    }

    render() {
        const { isComposeOpen } = this.state
        return <section className={`mail-compose ${isComposeOpen ? 'compose-open' : ''}`}>
            <button className="close-compose-modal" onClick={this.toggleComposeModal} >x</button>
            <form onSubmit={this.onSendMail} >
                <label>to:  <input type="text" name="to" /></label>
                <label>sub: <input type="text" name="subject" /></label>
                <textarea name="body" />
                <button >Send</button>
                {/* <button>Save as Draft</button> */}
            </form>
        </section>

    }
}

export const MailCompose = withRouter(_MailCompose)