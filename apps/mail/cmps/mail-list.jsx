
import { MailPreview } from './mail-preview.jsx'
import { Loader } from '../../../cmps/loader.jsx'

export function MailList({ mails }) {
    if (!mails.length) return <Loader color="black" />
    console.log(mails);
    return <section className="mails-list">
        {mails.map(mail => <MailPreview mail={mail} key={mail.id} />)}
    </section>
}