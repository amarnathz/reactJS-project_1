import React from 'react';
import SearchResultsItems from './SearchResultsItems';

function SearchResults(props) {
    const {heroesdata} = props;
   // console.log("props_SearchResult",props);
 //   console.log("_!",heroesdata);
  
    return (
        <div> 
          { heroesdata.map(hdata => <SearchResultsItems data= {hdata} />   )  }
        </div>
    );
}

export default SearchResults;