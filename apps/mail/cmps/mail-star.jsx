import { Loader } from '../../../cmps/loader.jsx'
import { mailService } from '../services/mail-service.js'

export class MailStar extends React.Component {

    state = {
        isStared: null
    }

    componentDidMount() {
        this.setState({ isStared: this.props.mail.isStared })
    }

    handleChange = () => {
        // ev.stopPropagation()
        console.log("star was clicked");
        this.setState({ isStared: !this.state.isStared }, () => {
            // this.props.onToggleStar(this.props.mail.id)
            mailService.toggleStar(mailId)
        })
    }

    render() {
        const { isStared } = this.state
        // if (!this.props.mail) return <React.Fragment></React.Fragment>
        return <input type="checkbox" className={`mail-star ${isStared ? "on" : "of"}`} 
        onChange={(ev)=>{
            ev.stopPropagation()
            this.handleChange()}}
         checked={!isStared} />
        
    }
}