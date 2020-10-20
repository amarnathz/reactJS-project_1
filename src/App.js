import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


function App() {
  return (
    <div className="App">
     <NavBar></NavBar> 
     <SearchBar></SearchBar>
     <SearchResults></SearchResults>
    </div>
  );
}

export default App;
