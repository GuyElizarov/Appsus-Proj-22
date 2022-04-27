export class MailFilter extends React.Component {

    state = {
        searchBy: '',
    }


    handleChange = ({ target }) => {
        const value = target.value
        this.setState((prevState) => ({ ...prevState, searchBy: value }))
        console.log(this.state);
    }

    render() {
        const {searchBy } = this.state
        return (
            <section>

                <form onSubmit={this.onSubmit}>
                    <input type="search" value={searchBy} placeholder="search by text" onChange={this.handleChange} />
                    <button>Search</button>
                </form>

            </section>
        )
    }
}