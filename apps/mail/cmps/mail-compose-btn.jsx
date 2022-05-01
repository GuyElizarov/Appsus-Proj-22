import { eventBusService } from '../../../services/event-bus-service.js'

export function MailComposeBtn() {

    return <section className="mail-compose-btn">
        <button onClick={() => { eventBusService.emit('onOpenCompose') }} > <img src='assets/imgs/mail/create_32dp.png'></img> Compose</button>
    </section>
}
