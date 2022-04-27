import { mailService } from "../services/mail-service.js"

import {EmailList} from '../cmps/mail-list'
import {EmailFilter} from '../cmps/mail-filter'

export class MailApp extends React.Component {

    state = {
        mails: [],
        filterBy: null,
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query(this.state.filterBy).then(mails => this.setState({ mails }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadMails)
    }

    onAddBook=(mail)=>{
        mailService.addMail(mail)
        this.loadMails()
    }

    render() {

        return <section className="mail-app">
            <EmailFilter/>
            <EmailList/>
            {/* <EmailCompose/> */}
            {/* <EmailFolderList/> */}
        </section>
    }

}