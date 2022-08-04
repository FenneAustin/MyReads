
const CurrentReading = (props) => {

const books = props.books;
const updateShelf = props.UpdateShelf

 return (
   <div className="bookshelf">
     <h2 className="bookshelf-title">Currently Reading</h2>
     <div className="bookshelf-books">
       <ol className="books-grid">
         {books.map((book) => {
          return (
            <li key={book.title}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: book.bookimageurl,
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select
                      defaultValue ={"currentlyReading"}
                      onChange={(e) => {
                        updateShelf(book, "currentlyReading", e.target.value);
                      }}
                    >
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li>
          );
         })}
       </ol>
     </div>
   </div>
 );
}

export default CurrentReading;
