import {useState, useEffect} from 'react'
import {search} from '../../BooksAPI'
import Items from './Items'
import '../../App.css'
import {Link} from 'react-router-dom'

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchItems = async () => {
      if (searchInput === "") {
        setResults(() => []);
        return null;
      }
      const books = await search(searchInput, 10);
      if (books.items) {
        setResults([]);
        return null;
      }
      if (books) {
        setResults([...books]);
      }
    };

    searchItems();
  }, [searchInput]); // eslint-disable-line react-hooks/exhaustive-deps

  const searchItems = (val) => {
    setSearchInput(val);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search"></button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>

        {results.length > 0 ? <Items results={results} /> : null}
      </div>
    </div>
  );
}


export default SearchBar;
