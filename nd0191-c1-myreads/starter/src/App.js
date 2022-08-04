import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar/index.js";
import ListBooks from "./components/ListBooks/index.js";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);



  const handleSearchChange = () => {
    setShowSearchpage(!showSearchPage);
  }

  return (
    <div className="app">
      {showSearchPage ? ( <SearchBar searchPage ={handleSearchChange}/>
      ) : (
        <ListBooks searchPage ={handleSearchChange}/>
  )
}
</div>
  )
};

export default App
