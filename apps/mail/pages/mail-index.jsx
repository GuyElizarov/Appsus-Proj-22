
import { MailList } from '../cmps/mail-list.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { mailService } from '../services/mail-service.js'
import { MailDetails } from "./mail-details.jsx"
import { MailCompose } from "../cmps/mail-compose.jsx"

const { Route, Switch } = ReactRouterDOM

export class MailApp extends React.Component {

    state = {
        mails: [],
        criteria: {
            status: "inbox",
            txt: '',
            isRead: "all",
        },
    }

    componentDidMount() {
        const urlSrcPrm = new URLSearchParams(this.state.criteria)
        const searchStr = urlSrcPrm.toString()
        this.props.history.push(`/mail?${searchStr}`)
        this.loadMails()
    }

    loadMails = () => {
        mailService.query(this.state.criteria)
            .then(mails => this.setState({ mails }))
    }

    onSetCriteria = (criteria) => {
        this.setState({ criteria }, this.loadMails)
        const urlSrcPrm = new URLSearchParams(criteria)
        const searchStr = urlSrcPrm.toString()
        this.props.history.push(`/mail?${searchStr}`)
    }

    get mailsToDisplay() {
        const { mails } = this.state
        const urlSrcPrm = new URLSearchParams(this.props.location.search)
        const status = urlSrcPrm.get('status')
        if (status === 'stared') return mails.filter(mail => !mail.isStared)
        else return mails.filter(mail => (mail.status === status))
    }

    onDeleteMail = (mailId) => {
        mailService.remove(mailId).then(this.loadMails)
    }

    onGoBack = () => {
        this.props.history.goBack()
    }

    // onToggleStar = (mailId) => {
    //     mailService.toggleStar(mailId).then(this.loadMails)
    // }

    // onComposeMail=(mail)=>{
    //     mailService.addMail(mail)
    //     this.loadMails()
    // }

    render() {
        const { criteria } = this.state
        return <section className="mail-app">
            <MailCompose />
            <MailFolderList criteria={criteria} onSetCriteria={this.onSetCriteria} />
            <Switch>
                <Route path="/mail/:mailId" component={MailDetails} />
                <Route path="/mail" component={() => <MailList mails={this.mailsToDisplay} onDeleteMail={this.onDeleteMail} onToggleStar={this.onToggleStar} />} />
            </Switch>
            <MailFilter criteria={criteria} onSetCriteria={this.onSetCriteria} />
        </section>
    }
}