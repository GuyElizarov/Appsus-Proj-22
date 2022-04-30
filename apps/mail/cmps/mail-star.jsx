// import { Loader } from '../../../cmps/loader.jsx'
import { mailService } from '../services/mail-service.js'

// export class MailStar extends React.Component {

//     state = {
//         id: null
//     }

//     componentDidMount() {
//         this.setState({ isStared: this.props.mail.isStared })
//     }

//     handleChange = (ev) => {
//         ev.stopPropagation()
//         console.log("star was clicked");
//         this.setState({ isStared: !this.state.isStared }, () => {
//             this.props.onToggleStar(this.props.id)
//             // mailService.toggleStar(this.props.id)
//         })
//     }
//     stopLabelPropagation = (ev) => {
//         ev.stopPropagation();
//     }
//     render() {
//         const { isStared } = this.state
//         // if (!this.props.mail) return <React.Fragment></React.Fragment>
//         return <label onClick={this.stopLabelPropagation}>

//             <input type="checkbox" className={`mail-star ${isStared ? "on" : "of"}`}
//                 onChange={this.handleChange} checked={!isStared} />
//         </label>

//     }
// }
export function MailStar({ onToggleStar, mail }) {
    
    return <label onClick={(ev) => { 
        console.log(mail.name, "is clicked")
        ev.stopPropagation() }}>
        

        <input type="checkbox" className="mail-star"
            onChange={() => onToggleStar(mail.id)} checked={mail.isStared} />
    </label>
}