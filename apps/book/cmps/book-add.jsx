import { bookService } from "../services/book-service.js"
import { GoogleBook } from "../cmps/google-book.jsx"

export class BookAdd extends React.Component {


    state = {
        searchBy: '',
        googleBooks: []
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        const { target } = ev
        const value = target.value

        // this.setState((prevState) => ({ ...prevState, searchBy: value }), 
        this.loadGoogleBooks()
        // )
    }

    loadGoogleBooks = () => {
        bookService.queryGoogleBooks(this.state.searchBy).then((googleBooks) =>
            this.setState((prevState) => ({ ...prevState, googleBooks: googleBooks.items }))
        )
    }

    handleChange = ({ target }) => {
        const value = target.value
        console.log('value', value);
        this.setState((prevState) => ({ ...prevState, searchBy: value }))
        console.log(this.state);
    }

    render() {
        const { googleBooks, searchBy } = this.state
        return <React.Fragment>
            hello from addBook

            <form onSubmit={this.onSubmit}>
                <label> Search Book To Add: <input type="search" value={searchBy} onChange={this.handleChange} /> </label>
                <button>Search</button>
            </form>

            <ul>
                {googleBooks && googleBooks.map(book => <li key={book.id}><GoogleBook book={book} onAddBook={this.props.onAddBook} /></li>)}
            </ul>
        </React.Fragment>
    }


}