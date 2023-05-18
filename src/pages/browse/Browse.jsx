import React from "react";

import MovieList from "../../components/browse/MovieList";
import requests from "../../utils/requests";
import Banner from "../../components/browse/Banner";
import Nav from "../../components/browse/Nav";

import "./Browse.css";

function Browse() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <MovieList
        title=""
        isLargeRow
        fetchUrlNetflix={requests.fetchNetflixOriginals}
      />
      {/* <MovieList title="Xu hướng" fetchUrl={requests.fetchTrending} /> */}
      <MovieList title="Xu hướng" fetchUrl={requests.fetchTrending} />
      {/* <MovieList title="Xếp hạng cao" fetchUrl={requests.fetchTopRated} /> */}
      <MovieList title="Xếp hạng cao" fetchUrl={requests.fetchTopRated} />
      <MovieList title="Hành động" fetchUrl={requests.fetchActionMovies} />
      <MovieList title="Hài" fetchUrl={requests.fetchComedyMovies} />
      <MovieList title="Kinh dị" fetchUrl={requests.fetchHorrorMovies} />
      <MovieList title="Lãng mạn" fetchUrl={requests.fetchRomanceMovies} />
      <MovieList title="Bí ẩn" fetchUrl={requests.fetchMystery} />
      <MovieList
        title="Khoa học viễn tưởng"
        fetchUrl={requests.fetchScienceFiction}
      />
      <MovieList title="Chiến tranh" fetchUrl={requests.fetchWar} />
      <MovieList title="Tài liệu" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Browse;

// const test = async () => {
//   try {
//     const response = await fetch(
//       "http://localhost:8080/api/movies/trending/2/8qlOkxz4wq"
//     );
//     console.log(response);
//     if (response) {
//       const data = await response.json();
//       console.log(data);
//     } else {
//       throw Error;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// useEffect(() => {
//   test();
// }, []);
