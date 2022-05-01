const { withRouter } = ReactRouterDOM


class _MailFolderList extends React.Component {

    state = {
        criteria: null
    }

    componentDidMount() {
        this.setState({ criteria: this.props.criteria })
    }

    getCriteriaFromSearchParm = () => {
        const urlSrcPrm = new URLSearchParams(this.props.location.search)
        let paramObj = {}
        for (var value of urlSrcPrm.keys()) {
            paramObj[value] = urlSrcPrm.get(value);
        }
        if (!Object.keys(paramObj)) paramObj = null

        return paramObj
    }

    setStatus = (status) => {
        const criteria = this.getCriteriaFromSearchParm()
        criteria.status = status

        this.setState(({ criteria }), () => {
            this.props.onSetCriteria(this.state.criteria)
        })
    }

    render() {
        const { criteria } = this.state
        if (!criteria) return <React.Fragment></React.Fragment>
        return <section className="mail-folder-list">
            <div className={`${criteria.status === 'inbox' ? 'active-inbox' : ''}`} onClick={() => this.setStatus('inbox')} ><div className="folder-icon"><img src="assets/imgs/mail/icons8-inbox-24.png" /> </div>  Inbox</div>
            <div className={`${criteria.status === 'sent' ? 'active-folder' : ''}`} onClick={() => this.setStatus('sent')}><div className="folder-icon"><img src="assets/imgs/mail/icons8-sent-26.png" /></div>  Sent mail</div>
            <div className={` ${criteria.status === 'stared' ? 'active-folder' : ''}`} onClick={() => this.setStatus('stared')}><div className="folder-icon"><img src="assets/imgs/mail/icons8-star-24.png" /></div>  Stared</div>
            <div className={`${criteria.status === 'draft' ? 'active-folder' : ''}`} onClick={() => this.setStatus('draft')}><div className="folder-icon"><img src="assets/imgs/mail/icons8-paper-24.png" /></div> Draft</div>
            <div className={`${criteria.status === 'trash' ? 'active-folder' : ''}`} onClick={() => this.setStatus('trash')}> <div className="folder-icon"><img src="assets/imgs/mail/seo.png" /></div>  Trash</div>
        </section>
    }
}

export const MailFolderList = withRouter(_MailFolderList)