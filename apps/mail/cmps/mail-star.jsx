
export function MailStar({ onToggleStar, mail }) {

    return <label onClick={(ev) => {
        console.log(mail.name, "is clicked")
        ev.stopPropagation()
    }}>


        <input type="checkbox" className={`mail-star ${mail.isStared ? 'on' : 'of'}`}
            onChange={() => onToggleStar(mail.id)} checked={mail.isStared} />
    </label>
}