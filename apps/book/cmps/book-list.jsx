import { BookPreview } from './book-preview.jsx'
import { Loader } from '../../../cmps/loader.jsx'

export function BookList({ books, onSelectBook }) {
    if (!books.length) return <Loader color="black" />
    return <section className="book-list">
        {books.map(book => <BookPreview book={book} key={book.id} onSelectBook={onSelectBook} />)}
    </section>
}