
import MovieList from "../components/MovieList";


const movies = [
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    title: "Avengers: Endgame",
    releasedDate: "1994-09-22",
    imdbRating: "9.3",
    rottenTomatoRating: "91%",
  },
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    title: "The Godfather",
    releasedDate: "1972-03-24",
    imdbRating: "9.2",
    rottenTomatoRating: "98%",
  },
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    title: "The Godfather",
    releasedDate: "1972-03-24",
    imdbRating: "9.2",
    rottenTomatoRating: "98%",
  },
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    title: "The Godfather",
    releasedDate: "1972-03-24",
    imdbRating: "9.2",
    rottenTomatoRating: "98%",
  },
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    title: "The Godfather",
    releasedDate: "1972-03-24",
    imdbRating: "9.2",
    rottenTomatoRating: "98%",
  },
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    title: "The Godfather",
    releasedDate: "1972-03-24",
    imdbRating: "9.2",
    rottenTomatoRating: "98%",
  },
  // Add more movie objects here...
];


const GenreWiseMoviesReleased = () => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Genre WiseMovies Released</h1>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default GenreWiseMoviesReleased
