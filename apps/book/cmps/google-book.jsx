export function GoogleBook({ book ,onAddBook}) {
    return <React.Fragment>
        <p>{book.volumeInfo.title}</p>
        <button onClick={(book) => {
           const newBook = {
                authors: book.volumeInfo.authors,
                categories: book.volumeInfo.categories,
                description: book.volumeInfo.description,
                id: book.id,
                language: book.volumeInfo.language,
                listPrice: { amount: 100, currencyCode: "EUR", isOnSale: false },
                pageCount: book.volumeInfo.pageCount,
                publishedDate: book.volumeInfo.publishedDate,
                subtitle: book.volumeInfo.subtitle,
                thumbnail: book.volumeInfo.imageLinks.thumbnail,
                title: book.volumeInfo.title,
            }
            onAddBook(newBook)
        }}></button>
    </React.Fragment>

}