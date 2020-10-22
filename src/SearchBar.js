import React from 'react';


 function SearchBar(props) {
   // console.log("props", props);
    const {searchText,handleChange} = props;
    return (
        <div>
            <input id="search-id" type="search" placeholder="Find SuperHeroes By Searching Here....." 
            onChange={handleChange} value= {searchText} ></input>
        </div>
    );
}

export default SearchBar;