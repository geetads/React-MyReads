import React from 'react'
import {Route,Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
//Geeta test
class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books:{},
    searchBookResult:[]
  };

  getAllBooks=()=>{
  BooksAPI.getAll().then(data=>{
  this.setState({books:data})
  console.log(this.state.books);
  }).catch(error=>error);
  }

  componentDidMount(){
    this.getAllBooks();
  }

  updateBook = (book, shelf)=>{
  BooksAPI.update(book,shelf).then(b=>{
  this.setState(state=>({
    book:state.books.filter(b=>b.id!==book.id).concat([book])
  }))
  this.getAllBooks();
 }).catch(function(e){});
  }

  onSearchBook=(query)=>{
    BooksAPI.search(query,20).then(data=>{
      this.setState(state=>({
        searchBookResult:data
      }))
    }).catch(function(e){
      console.log(e);
    })
  };
  
  render() {
    const {books}=this.state;
    return (
      <div className="app">
        <Route
        exact
        path='/'
        render={()=>(
          <div className="List-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
            </div>
            <div className='listbooks-content'>
            <div className='bookshelf'>
            <h2 className='bookshelf-title'>Currently Reading</h2>
            <div className='bookshelf-books'>

     <ListBooks books={books.length>0 && books.filter(book=>book.shelf==='currentlyReading')} 
     onUpdateShelf={this.updateBook}/>
     
     </div>
     </div>

     <div className='bookshelf'>
              <h2 className='bookshelf-title'>Want To Read</h2>
              <div className='bookshelf-books'>

     <ListBooks books={books.length>0 && books.filter(book=>book.shelf==='wantToRead')} 
     onUpdateShelf={this.updateBook}/>
     
     </div>
     </div>

     <div className='bookshelf'>
              <h2 className='bookshelf-title'>Read</h2>
              <div className='bookshelf-books'>

     <ListBooks books={books.length>0 && books.filter(book=>book.shelf==='read')} 
     onUpdateShelf={this.updateBook}/>
     </div>
     </div>
     </div>
   
   <div className="open-search">
      <Link to="/searchbooks" className="search-button">
         Add a book 
         </Link> 
         </div>
        </div>    
        )}/>
   <Route path='/SearchBooks' render={()=>(<SearchBook searchBookResult={this.state.searchBookResult}
   onSearchBook={this.onSearchBook} onUpdateShelf={this.updateBook}/>)} />  
</div>
    )
  }
}
export default BooksApp
