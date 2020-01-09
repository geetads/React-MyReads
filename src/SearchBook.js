import React from 'react'
import {Link} from 'react-router-dom'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'
import PropTypes from 'prop-types'

class SearchBooks extends React.Component {
  state = {
    search:'',
    showSearchPage: false
    
  }

handleChange=(e)=>{
    console.log(e.target.value);
    this.setState({search:e.target.value});
    if(this.props.onSearchBook && this.state.search!==""){
      this.props.onSearchBook(e.target.value);
    }
  } 

  render() {
    const  {searchBookResult}=this.props;
    const {onUpdateShelf,books}=this.props;
    console.log("searchBookResult",searchBookResult);
    console.log("books",books)
let verifiedBooks=[];
verifiedBooks=searchBookResult && searchBookResult.length>0 && searchBookResult.map(book=>{
books && books.length>0 && books.forEach(bookOnShelf=>{
    book.id===bookOnShelf.id ?(
      book.shelf=bookOnShelf.shelf
    ):(
      books.shelf || (
        books.shelf='none'
      )
    )
  }
)

  return book;
})



    return( 
      
        <div>
        <div className="search-books">
        
            <div className="search-books-bar">
              <Link to='/' className='close-search'>
                close
              </Link>
              
              <div className="search-books-input-wrapper">
              <div className="search-title">
                <form className='search-book-form'>
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.search}
                onChange={this.handleChange}
                />
                </form>
                </div>
                </div>               
            </div>
           </div>
           <div>
              <div className='bookshelf-books'>
                { searchBookResult && searchBookResult.length>0  && 
                (<ListBooks books={verifiedBooks} onUpdateShelf={onUpdateShelf} />)}
           </div>
           </div>       
          </div>               
                 );
                }
              }
                
        export default SearchBooks
