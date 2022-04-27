
import { MailList } from '../cmps/mail-list.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { mailService } from '../services/mail-service.js'
import { MailDetails } from "./mail-details.jsx"



const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class MailApp extends React.Component {

    state = {
        mails: [],
        filterBy: null,
        searchBy: null
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query().then(mails => this.setState({ mails }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadMails)
    }

    // onAddBook=(mail)=>{
    //     mailService.addMail(mail)
    //     this.loadMails()
    // }

    render() {
        const { mails } = this.state
        return <Router>
            <section className="mail-app">
                {/* <MailFilter/> */}
                <Switch>
                <Route path="/mail/:mailId" component={MailDetails} />
                <Route path="/mail/" component={MailList} />
                </Switch>
                {/* <EmailCompose/> */}
                {/* <EmailFolderList/> */}
            </section>
        </Router>
    }

}