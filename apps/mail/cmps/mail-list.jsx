
import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails, onDeleteMail ,onToggleStar}) {

    if (!mails || !mails.length) return <div className="no-mails">no mails</div>
    return <section className="mails-list">
        {mails.map(mail => <MailPreview mail={mail} key={mail.id} onDeleteMail={onDeleteMail} onToggleStar={onToggleStar}/>)}
    </section>
}