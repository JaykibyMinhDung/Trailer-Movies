import React, { useState, useEffect } from "react";

import axios from "../../utils/axios";
// import axios from "axios";
import requests from "../../utils/requests";

import "./SearchResult.css";
import MovieDetail from "../browse/MovieDetail";

const base_url = "https://image.tmdb.org/t/p/original";

const SearchResult = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // const url = `${requests.fetchSearch}&query=${query}`;
  const url = `${requests.fetchSearch}${query}`;

  async function handleClick(a) {
    if (selectedMovie && selectedMovie.id === a.id) {
      setSelectedMovie(null);
      setTrailerUrl("");
    } else {
      if (a) {
        setSelectedMovie(a);
        try {
          const idmovie = await a.id;
          const request = await axios.post(
            `${requests.fetchidMovie}${idmovie}`
          );
          setTrailerUrl(request.data.key);
          console.log(request);
          //   return request; 92783
        } catch (error) {
          console.log("SearchResults");
          console.error(error.message);
        }
      }
    }
  }
  useEffect(() => {
    async function fetchData() {
      const request = await axios.post(url);
      setMovies(request.data.results);
      return request;
    }

    if (query) {
      fetchData();
      if (movies) {
        handleClick();
      }
    } else {
      setMovies([]);
    }
  }, [url, query]);

  return (
    <div className="row">
      <h2>Search Result</h2>
      <div className="row_posters search-resul-container sc2">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`row_poster row_posterLarge`}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
      <div style={{ padding: "40px" }}>
        {selectedMovie && (
          <MovieDetail movieData={selectedMovie} movieTrailer={trailerUrl} />
        )}
      </div>
    </div>
  );
};

export default SearchResult;
