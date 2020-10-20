import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


function App() {
  return (
    <div className="App">
     <NavBar></NavBar> 
       <div className = "main">
        <SearchBar></SearchBar>
        <SearchResults></SearchResults>
    
      </div>
    
     </div>
  );
}

export default App;
