const { withRouter } = ReactRouterDOM

class _MailFolderList extends React.Component {

    state = {
        status: ''
    }

    componentDidMount() {
        const urlSrcPrm = new URLSearchParams(this.props.location.search)
        let status = urlSrcPrm.get('status')
        console.log(status, "status from folder");
        this.setStatus(status)
    }

    setStatus=(status)=>{
        this.setState({ status }, ()=>this.props.onSetStatus(status))
    }

    render() {
        return <section className="mail-folder-list">
            <div className="inbox"  onClick={()=>this.setStatus('inbox')} >Inbox</div>
            <div className="trash" onClick={()=>this.setStatus('stared')}>Trash</div>
            <div className="starred" onClick={()=>this.setStatus('stared')}>Starred</div>
            <div className="sent-mail" onClick={()=>this.setStatus('sent')}>Sent mail</div>
            <div className="draft" onClick={()=>this.setStatus('draft')}>Draft</div>
        </section>
    }
}

export const MailFolderList = withRouter(_MailFolderList)