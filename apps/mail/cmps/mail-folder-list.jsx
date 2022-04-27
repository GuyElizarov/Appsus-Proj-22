export class EmailFolderList extends React.Component {

    state = {
        criteria: {
            status: 'inbox/sent/trash/draft',
            txt: 'puki',
            isRead: false,
            isStared: true, 
            labels: ['important', 'romantic'] 
        }
    }

    // inputRef = React.createRef()

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            // this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { vendor, minSpeed, maxSpeed } = this.state.filterBy
        return <section className="car-filter">
            <form onSubmit={this.onFilter}>
                <label htmlFor="by-vendor">Vendor</label>
                <input type="text" id="by-vendor" placeholder="by vendor" name="vendor"
                    value={vendor} onChange={this.handleChange} ref={this.inputRef} />

                <label htmlFor="by-minSpeed">Min Speed</label>
                <input type="number" id="by-minSpeed" placeholder="by min speed" name="minSpeed"
                    value={minSpeed} onChange={this.handleChange} />

                <label htmlFor="by-maxSpeed">Max Speed</label>
                <input type="number" id="by-maxSpeed" placeholder="by max speed" name="maxSpeed"
                    value={maxSpeed} onChange={this.handleChange} />

                <button>FILTER!</button>
            </form>
        </section>
    }
}