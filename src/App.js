import "./App.css";
// import { useState } from "react";
import SearchBar from "./components/SearchBar/index.js";
import ListBooks from "./components/ListBooks/index.js";
import {Route} from "react-router-dom"

function App() {


  return (
    <div className="app">


        <Route exact path="/">
          <ListBooks />
        </Route>
        <Route exact path="/search">
          <SearchBar />
        </Route>

    </div>
  );
};

export default App
