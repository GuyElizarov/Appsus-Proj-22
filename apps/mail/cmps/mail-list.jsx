
import { MailPreview } from './mail-preview.jsx'
import { Loader } from '../../../cmps/loader.jsx'
import { mailService } from '../services/mail-service.js'



export function MailList({ mails }) {
    
    if (!mails || !mails.length) return <Loader color="black" />
    return <section className="mails-list">
        {mails.map(mail => <MailPreview mail={mail} key={mail.id} />)}
    </section>
}