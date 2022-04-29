
import { MailList } from '../cmps/mail-list.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { mailService } from '../services/mail-service.js'
import { MailDetails } from "./mail-details.jsx"
import { MailCompose } from "../cmps/mail-compose.jsx"



const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class MailApp extends React.Component {

    state = {
        mails: [],
        criteria: null,
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query(this.state.criteria)
            .then(mails => this.setState((prevState) => ({ ...prevState, mails })))
    }

    onSetCriteria = (criteria) => {
        this.setState((prevState) => ({ ...prevState, criteria }), this.loadMails)

        const urlSrcPrm = new URLSearchParams(criteria)
        const searchStr = urlSrcPrm.toString()
        this.props.history.push(`/mail?${searchStr}`)
    }

    onSetStatus = (status) => {
        this.setState((prevState) => ({ ...prevState, criteria: { ...prevState.criteria, status } }), ()=>{
            this.loadMails()
            const urlSrcPrm = new URLSearchParams(this.state.criteria)
            const searchStr = urlSrcPrm.toString()
            this.props.history.push(`/mail?${searchStr}`)
        }) 
    }
    // onSetStatus = (status) => {
    //     this.setState((prevState) => ({ ...prevState, criteria: { ...prevState.criteria, status } }), this.loadMails)
    //     const urlSrcPrm = new URLSearchParams(this.state.criteria)
    //     const searchStr = urlSrcPrm.toString()
    //     this.props.history.push(`/mail?${searchStr}`)
    // }
    // get mailsToDisplay() {
    //     const { mails } = this.state
    //     const urlSrcPrm = new URLSearchParams(this.props.location.search)
    //     const status = urlSrcPrm.get('status')
    //     if (!status) return mails
    //     return mails.filter(mail => (mail.status === status))
    // }

    // onComposeMail=(mail)=>{
    //     mailService.addMail(mail)
    //     this.loadMails()
    // }

    render() {
        const { mails } = this.state
        return <section className="mail-app">
            <MailCompose />
            <MailFolderList onSetStatus={this.onSetStatus} />
            <Switch>
                <Route path="/mail/:mailId" component={MailDetails} />
                <Route path="/mail" component={() => <MailList mails={mails} />} />
            </Switch>
            <MailFilter onSetCriteria={this.onSetCriteria} />
        </section>

    }

}