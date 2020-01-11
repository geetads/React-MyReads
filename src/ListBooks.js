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

                          {book.imageLinks ? (
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                          ):
                            <div className="book-cover" style={{ width: 128, 
                              height: 193, 
                                backgroundImage: `url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")`}}></div>}
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(e)=>handleSelectChange(book,e)}>
                                <option value="none" disabled>Move to...</option>
                                <option name="none" value="none">None</option>
                                <option name="currentlyReading" value="currentlyReading">Currently Reading</option>
                                <option name="wantToRead" value="wantToRead">Want to Read</option>
                                <option name="read" value="read">Read</option>
                                
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
