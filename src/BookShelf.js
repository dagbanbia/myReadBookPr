import React, {Component} from 'react'
import Book from './Book'



class BookShelf extends Component {

  render() {
    const books = this.props.books
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (<Book book={book} key={index} 
             moveShelf={this.props.moveShelf}
            currentShelf= {book.shelf}
            />))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;