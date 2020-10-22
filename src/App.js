import React,{useState} from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


function App() {

  const [searchText,setSearchText] = useState('');
  const [heroesdata,setheroesData] = useState([]);
  async  function searchHeroes(search){
      const res = await fetch(`https://superheroapi.com/api/410124206650725/search/${search}`);
      const data = await res.json();

      setheroesData(data.results);
     // console.log("data_1", data);
  }

  function handleChange(e){
      const searchTerm = e.target.value;
      //console.log(searchTerm);
      setSearchText(searchTerm);
      if(searchTerm.length == 0) { setheroesData([]); }
      if(searchTerm.length > 3 ) {    searchHeroes(searchTerm);   } 
      }


  return (
    <div className="App">
     <NavBar></NavBar> 
        <div className = "main">
         <SearchBar searchText={searchText} handleChange={handleChange}></SearchBar>
         <SearchResults heroesdata={heroesdata} ></SearchResults>
    
         </div>
    
     </div>
  );
}

export default App;
