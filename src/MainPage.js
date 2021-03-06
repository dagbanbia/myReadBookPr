import React, {Component} from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'
// import Book from './Book';



class MainPage extends Component {


  render() {
    const books = this.props.books

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads </h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf  books= {books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading"  moveShelf={this.props.moveShelf}/>

            
            <BookShelf books={books.filter((book) => (book.shelf === "wantToRead"))} title="Want to Read" moveShelf={this.props.moveShelf} />

            <BookShelf books={books.filter((book) => (book.shelf === "read"))} title="Read" moveShelf={this.props.moveShelf}/>
          </div>
        </div>

	    <div className="open-search">
	         <Link to="/search" >Add a book </Link>
	    </div>
	  </div>

	 )
  }

}

export default MainPage;