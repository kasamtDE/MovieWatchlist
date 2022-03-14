import React, { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalState";
import { SearchContext } from "../Contexts/SearchContext";
import "../../main.css"

function Search() {
 
  const { watched, watchlist } = useContext(GlobalContext);
  const {fetchMovies,setQuery,query} = useContext(SearchContext)
 
  const onChange = (e) => {
    sessionStorage.setItem("search-query",JSON.stringify(e.target.value))
    setQuery(e.target.value);

  };

  
  
  const handleSearchButton = (e) =>{
    e.preventDefault()
    fetchMovies()
  }
  return (
    <>
      <div className="search-container">
        <form className="search-form">
          <input
            className="search-input"
            placeholder="Search For A Movie"
            value={query}
            onChange={onChange}
          />
          <button className="search-button" onClick={handleSearchButton}>Search</button>
        </form>
      </div>
    </>
  );
}

export default Search;
