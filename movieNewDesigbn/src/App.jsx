
import "./App.css";
import GenreWiseMoviesReleased from "./components/GenreWiseMoviesReleased";
import index from "./components/index"





function App() {

  return (
    <>
      <index.Header />

      <GenreWiseMoviesReleased/>

      <index.Footer />
    </>
  );
}

export default App;
