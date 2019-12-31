import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBook from './SearchBook'

const ListBooks =(props) =>{

const {books,onUpdateShelf}=props;

const handleSelectChange=(book,e)=>{
e.preventDefault();
const value=e.target.value;
console.log(value);
if (onUpdateShelf){
  onUpdateShelf(book,value);
}
}

return (   
  <div>
        <ol className="books-grid">{books.length>0 && (books.map((book,i)=>(
            <li key={i}>
                       <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(e)=>handleSelectChange(book,e)}>
                                <option value="none" disabled>Move to...</option>
                                <option name="currentlyReading" value="currentlyReading">Currently Reading</option>
                                <option name="wantToRead" value="wantToRead">Want to Read</option>
                                <option name="read" value="read">Read</option>
                                <option name="none" value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          {Array.isArray(book.authors)?
                          book.authors.map((author,i)=>(
                            <div key={i} className="book-authors">{author}</div>
                          ))
                        :
                        false
                        }
                       </div>
                    </li>
                        )))
                      }
                    </ol>       
               </div>
);
}
    
export default ListBooks