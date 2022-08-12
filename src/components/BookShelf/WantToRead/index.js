

const WantToRead = (props) =>{

  const books = props.books;
const updateShelf = props.UpdateShelf;


    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              return (
                <li>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${book?.imageLinks.thumbnail})`
                        }}
                      ></div>
                      <div className="book-shelf-changer">
                        <select
                          defaultValue={"wantToRead"}
                          onChange={(e) => {
                            e.preventDefault()
                            updateShelf(book, "wantToRead", e.target.value);
                          }}
                        >
                          <option value="none" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
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


export default WantToRead;