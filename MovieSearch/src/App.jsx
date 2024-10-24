import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import "dotenv";
import PropTypes, { array } from "prop-types";

const KEY = "";//api key

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedID, setSelectedID] = useState(null);

  function handleSelection(id) {
    setSelectedID((pId) => (pId === id ? null : id));
  }

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          if (!res.ok) throw new Error("Opps! Something went wrong!!");
          const data = await res.json();
          if (data.Response === false) throw new Error("Movie not found!");
          setMovies(data.Search);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();
    },
    [query]
  );

  return (
    <div className="min-h-screen min-w-full bg-slate-500 ">
      <Navbar />
      <div className="flex justify-center items-center">
        <SearchBar query={query} setQuery={setQuery} />
      </div>
      <div className="flex flex-wrap justify-between items-center  px-5 py-5 bg-slate-600 rounded-md shadow-xl mx-4 mb-4  ">
        {error && <Errormessage error={error} />}
        {isLoading && <Loader />}
        {!isLoading && !error && (
          <MovieList movies={movies} onSelection={handleSelection} />
        )}

        {selectedID && <MovieDetails selectedID={selectedID} query={query} />}
        {!movies && <WatchList />}
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
};

function Errormessage({ error }) {
  return <h1 className="text-5xl">{error}</h1>;
}
function Loader() {
  return <div className="text-5xl text-center">Loading...</div>;
}
function SearchBar({ query, setQuery }) {
  return (
    <div className=" w-full mb-10 p-10 flex justify-center">
      <div className="  p-3 w-full lg:w-[50%] flex justify-center space-x-4 items-center">
        <label
          className="font-light text-2xl flex-shrink-0 "
          htmlFor="searchbar"
        >
          Search Movie
        </label>
        <span className="flex w-full flex-grow ">
          <img
            className="w-15 h-10 shadow-sm"
            src="/search.png"
            alt="seacrh icon"
          />
          <input
            className="rounded-3xl flex-grow focus:ring-green-600 max-w-600 shadow-xl focus:outline-none focus:ring-1 pl-4"
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="search movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </span>
      </div>
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
  onSelection: PropTypes.func,
};
function MovieList({ movies, onSelection }) {
  return (
    <div className="shadow-xl ">
      <ul className="  bg-black flex flex-wrap rounded-md shadow-sm">
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} onSelection={onSelection} />
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  movie: PropTypes.object,
  onSelection: PropTypes.func,
};
function Movie({ movie, onSelection }) {
  return (
    <li
      className="flex-1 p-3 bg-slate-200  shadow-2xl rounded-md flex flex-col flex-wrap justify-between items-baseline content-evenly m-2 "
      onClick={() => onSelection(movie.imdbID)}
    >
      <img
        className="w-28 h-30 shadow-md rounded-sm"
        src={movie.Poster}
        alt="The poster of the movie"
      />
      <h2 className="font-semibold ">{movie.Title}</h2>
      <div className="font-light">{movie.Year}</div>
    </li>
  );
}

function MovieDetails({ selectedID }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const {
    Title,
    Poster,
    Year,
    Plot,
    imdbRating,
    Released,
    Actors,
    Genre,
    Director,
    Runtime,
  } = movie;

  useEffect(
    function () {
      async function getMovie() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
        );
        const data = await res.json();
        console.log(data);
        setMovie(data);

        setIsLoading(false);
      }
      getMovie();
    },

    [selectedID]
  );

  return (
    <>
      {isLoading && !movie ? (
        <Loader />
      ) : (
        <div className="flex mt-10 bg-slate-950  text-white  shadow-2xl rounded-2xl space-x-5 pr-2">
          <img src={Poster} alt={`The Poster of ${Title}`} />
          <div className="flex flex-wrap flex-col justify-start ">
            <h1 className="font-semibold mt-5 text-2xl">{Title}</h1>
            <h2 className="font-light text-2xl">{Year}</h2>
            <p>⭐{imdbRating}</p>
            <p className=" mt-5 font-light">{Actors}</p>
            <p className="font-light">- {Director}</p>
            <p className="mt-10 flex-grow text-gray-200 text-xl font-light">
              <em>{Plot}</em>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function WatchList() {
  return <div>Watch List</div>;
}
