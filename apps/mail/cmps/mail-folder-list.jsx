export class MailFolderList extends React.Component {

    state = {
        criteria: {
            status: '',
            txt: '',
            isRead: false,
            isStared: false, 
        }
    }

    // inputRef = React.createRef()

    // handleChange = ({ target }) => {
    //     const value = target.value
    //     const field = target.name
    //     this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
    //         // this.props.onSetFilter(this.state.filterBy)
    //     })
    // }

    // onFilter = (ev) => {
    //     ev.preventDefault()
    //     this.props.onSetFilter(this.state.filterBy)
    // }

    render() {
        
        return <section className="mail-folder-list">
           <div className="inbox">Inbox</div>
           <div className="starred">Starred</div>
           <div className="sent-mail"></div>
           <div className="draft">Draft</div>
        </section>
    }
}
 