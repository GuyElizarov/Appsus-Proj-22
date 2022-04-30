

export class NoteFilter extends React.Component {
    state = {
        txt: ''
    }


    // componentDidMount() {
    // }

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        this.setState((prevState) => ({ [field]: value }), () => {
            this.props.setNoteFilter(this.state.txt)
        })
    }

    inputRef = React.createRef()
    render() {
        console.log('hh')
        if (!this.inputRef) return <React.Fragment></React.Fragment>
        return <div className="filter-by-note">
            <input ref={this.inputRef} type="text" name="txt" placeholder="search" onChange={this.handleChange} />
        </div>
    }
}
