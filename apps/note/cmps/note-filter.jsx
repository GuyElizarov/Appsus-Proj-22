
const { withRouter } = ReactRouterDOM

export class _NoteFilter extends React.Component {
    state = {
        txt: ''
    }


    componentDidMount() {
        this.setState({ txt: this.props.txt }, () => console.log(this.state))
    }

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        console.log(value, field)
        this.setState((prevState) => ({ [field]: value }), () => {
            this.props.onSetNoteFilter(this.state.txt)
            console.log(this.state)
        })
    }

    inputRef = React.createRef()
    render() {
        if (!this.inputRef) return <React.Fragment></React.Fragment>
        return <div className="filter-by-note">
            <input ref={this.inputRef} type="text" placeholder="search" onChange={this.handleChange} />
        </div>
    }
}
