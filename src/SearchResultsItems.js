import React from 'react';

function SearchResultsItems(props) {
     const {data} = props;
     console.log("s_dta",data);
    return (
        <div className="search-results">
        <div className="left">
         <img src={data.image.url} alt="super Hero"></img>
        </div>
        <div className="right">
    <h2>{data.name}   </h2><span style= {{ "font-size" : 15, color : "white","background-color" :"grey",padding :3}}>{data.biography["full-name"]}</span>  

         <div className="status">
    <div> Strength : {data.powerstats.strength}</div>
              <div> Speed  : {data.powerstats.speed}</div>
              <div> Power  : {data.powerstats.power}</div>
         </div>
        </div>
    </div>
    );
}

export default SearchResultsItems;