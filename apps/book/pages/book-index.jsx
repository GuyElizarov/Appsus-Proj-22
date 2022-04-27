import { bookService } from "../services/book-service.js"
import { BookList } from "../cmps/book-list.jsx"
import { BookFilter } from "../cmps/book-filter.jsx"
import { BookAdd } from "../cmps/book-add.jsx"

export class BookApp extends React.Component {
    state = {
        books: [],
        filterBy: null,
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.query(this.state.filterBy).then(books => this.setState({ books }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }

    onAddBook = (book) => {
        bookService.addBook(book)
        this.loadBooks()

    }

    render() {
        const { books } = this.state
        return <section className="book-app">
            <BookFilter onSetFilter={this.onSetFilter} />
            <BookAdd onAddBook={this.onAddBook} />
            <BookList books={books} onSelectBook={this.onSelectBook} />
        </section>
    }
}
