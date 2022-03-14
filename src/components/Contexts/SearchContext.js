import React, { createContext, useState, useEffect } from "react";


export const SearchContext = createContext();

const initialSearch =  sessionStorage.getItem("search-query")
? JSON.parse(sessionStorage.getItem("search-query"))
: "Venom" 

function SearchContextProvider({ children }) {
  const [query, setQuery] = useState(initialSearch);
  const [results, setResults] = useState([]);

  const fetchAPI = process.env.REACT_APP_TMDB_API;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
  const Url = `https://api.themoviedb.org/3/search/movie?api_key=${fetchAPI}&query=${query}&language=en-US&page=1&include_adult=false`;
  const fetchMovies = async () => {
    await fetch(Url)
      .then((response) => response.json())
      .then((data) => setResults(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <SearchContext.Provider
      value={{
        results,
        setResults,
        imageBaseUrl,
        query,
        setQuery,
        fetchMovies,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
