import {useState, useEffect} from 'react'
import {search} from '../../BooksAPI'
import Items from './Items'
import '../../App.css'

const SearchBar = (props) => {
    const searchPage = props.searchPage


    const [searchInput, setSearchInput] = useState('')
    const [results, setResults] = useState([])


    useEffect(() => {
        const searchItems = async () => {
          if (searchInput === ''){
            setResults([])
            return null
          }
          const books = await search(searchInput,10)
          if (books.items){
            setResults([])
            return null
          }
          if(books){setResults([...books])}

        }
        searchItems()

      },[searchInput])



    const searchItems = (val) => {
      setSearchInput(val)
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={searchPage}>
            Close
          </button>
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

          { {results} ? (
            <Items results = {results} />
          ) : ( null ) }
        </div>
      </div>
    );
}


export default SearchBar;
