import React from 'react'

const ListBooks =(props)=>{

const {books,onUpdateShelf}=props;

const handleSelectChange=(book,e)=>{
e.preventDefault()
const value=e.target.value;
console.log(value);
if (onUpdateShelf){
  onUpdateShelf(book,value);
}

}

const currentlyReadingBooks=books.length > 0 && books.filter(book=>book.shelf==='currentlyReading');
const wantToReadBooks=books.length>0 && books.filter(book=>book.shelf==='wantToRead');
const read=books.length>0 && books.filter(book=>book.shelf==='read');



return (

<div className="list-books-content">
    <div className="bookshelf">
      <h2 className= 'bookshelf-title'> Currently Reading </h2>
      <div className='bookshelf-books'></div>
        <ol className="books-grid">{currentlyReadingBooks.length>0 && (currentlyReadingBooks.map((book,i)=>(
            <li key={i}>
                       <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
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

    <h2 className= 'bookshelf-title'> Want To Read </h2>
      <div className='bookshelf-books'></div>
        <ol className="books-grid">{wantToReadBooks.length>0 && (wantToReadBooks.map((book,i)=>(
            <li key={i}>
                       <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
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
  

<h2 className= 'bookshelf-title'> Read </h2>
      <div className='bookshelf-books'></div>
        <ol className="books-grid">{read.length > 0 && (read.map((book,i)=>(
            <li key={i}>
                       <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
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

)        
}


        


    
export default ListBooks