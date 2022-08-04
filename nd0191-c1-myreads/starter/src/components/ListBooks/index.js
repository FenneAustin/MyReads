import CurrentReading from "../BookShelf/CurrentReading/index.js";
import WantToRead from "../BookShelf/WantToRead/index.js";
import Read from "../BookShelf/Read/index.js";
import { useState } from "react";
import { CurrentReadingShelf, WantToReadShelf, ReadShelf } from "../../Data";

const ListBooks = (props) => {
  const searchPage = props.searchPage;

  const [CurrentReadings, setCurrentReadings] = useState(CurrentReadingShelf);
  const [WantToReads, setWantToReads] = useState(WantToReadShelf);
  const [Reads, setReads] = useState(ReadShelf);

  const handleShelfUpdate = (book, oldshelf, newshelf) => {
    if (oldshelf === newshelf){
      return null
    }
    const index = findIndex(book, oldshelf);
    removeFromShelf(index, oldshelf);
    if(newshelf === 'none'){
      return null
    }
    addToShelf(book, newshelf);

  };

  const findIndex = (book, oldshelf) => {
    let index;
    if (oldshelf === "currentlyReading"){
      index = CurrentReadings.findIndex(object => {
        return object.title === book.title
      })
    }
    if(oldshelf === 'wantToRead'){
            index = WantToReads.findIndex((object) => {
              return object.title === book.title;
            });
    }
    if(oldshelf === 'read'){
      index = Reads.findIndex((object) => {
        return object.title === book.title;
      });
    }

    return index;
  };

  const removeFromShelf = (index, oldshelf) => {
    if (oldshelf === "currentlyReading") {
      setCurrentReadings([
        ...CurrentReadings.slice(0, index),
        ...CurrentReadings.slice(index + 1, CurrentReadings.length),
      ]);
    }
    if (oldshelf === "wantToRead") {
      setWantToReads([
        ...WantToReads.slice(0, index),
        ...WantToReads.slice(index + 1, WantToReads.length),
      ]);
    }
    if (oldshelf === "read") {
      setReads([
        ...Reads.slice(0, index),
        ...Reads.slice(index + 1, Reads.length),
      ]);
    }
  };

  const addToShelf = (book, newshelf) => {
    console.log(newshelf)
    if (newshelf === "currentlyReading") {
      setCurrentReadings([...CurrentReadings, book]);
    }
    if(newshelf === 'wantToRead'){
      setWantToReads([...WantToReads,book]);
    }
    if(newshelf === 'read'){
      setReads([...Reads,book]);
    }
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentReading
            books={CurrentReadings}
            UpdateShelf={handleShelfUpdate}
          />
          <WantToRead books={WantToReads} UpdateShelf={handleShelfUpdate} />
          <Read books={Reads} UpdateShelf={handleShelfUpdate} />
        </div>
      </div>
      <div className="open-search">
        <button onClick={searchPage}>Add a book</button>
      </div>
    </div>
  );
};

export default ListBooks;
