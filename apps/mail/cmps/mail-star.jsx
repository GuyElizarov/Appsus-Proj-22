import { Loader } from '../../../cmps/loader.jsx'

export class MailStar extends React.Component {

    state = {
        isStared: null
    }

    componentDidMount() {
        this.setState({ isStared: this.props.mail.isStared })
    }

    handleChange = (ev) => {
        ev.preventDefault()
        this.setState({ isStared: !this.state.isStared },()=>{
            this.props.onToggleStar(this.props.mail.id)
        })
    }

    render() {
        const { isStared } = this.state
        if (!this.props.mail) return <React.Fragment></React.Fragment>
        return <section>
            <input type="checkbox" className={`mail-star ${isStared ? "on" : "of"}`} onChange={this.handleChange} checked={!isStared} />

        </section>
    }
}