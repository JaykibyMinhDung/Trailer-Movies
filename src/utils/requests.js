const API_KEY2 = "504b85f6fe0a10a9c7f35945e14e7ddf";
const API_KEY = "8qlOkxz4wq";

const requests = {
  // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY2}&with_network=123`,
  fetchTrending: `/trending/${API_KEY}`,
  // fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/top-rate/${API_KEY}`,
  fetchActionMovies: `/discover/28/${API_KEY}`,
  fetchComedyMovies: `/discover/35/${API_KEY}`,
  fetchHorrorMovies: `/discover/27/${API_KEY}`,
  fetchRomanceMovies: `/discover/10749/${API_KEY}`,
  fetchDocumentaries: `/discover/99/${API_KEY}`,
  fetchMystery: `/discover/9648/${API_KEY}`,
  fetchScienceFiction: `/discover/878/${API_KEY}`,
  fetchWar: `/discover/10752/${API_KEY}`,
  fetchSearch: `/search/${API_KEY}/`,
  fetchidMovie: `/video/${API_KEY}/`,
};

export default requests;

// fetchTopRated: `/top-rate/${API_KEY}`,
// fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
// fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
// fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
// fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
// fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
