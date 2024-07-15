import PropTypes from "prop-types";

const Cart = ({ movie }) => {
  const { poster, title, releasedDate, imdbRating, rottenTomatoRating } = movie;
  return (
    <div className="md:w-full flex border border-gray-300 rounded-lg shadow-md m-4 overflow-hidden bg-slate-300">
      <div className="md:w-full">
        <img
          src={poster || "default-poster.jpg"}
          alt={`${title || "Unknown Title"} poster`}
          className="w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title || "Unknown Title"}</h2>
          <p className="text-gray-600 mb-1">
            Released: {releasedDate || "Unknown Date"}
          </p>
          <p className="text-gray-600 mb-1">
            IMDb Rating: {imdbRating || "N/A"}
          </p>
          <p className="text-gray-600 mb-1">
            Rotten Tomatoes: {rottenTomatoRating || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  movie: PropTypes.shape({
    poster: PropTypes.string,
    title: PropTypes.string,
    releasedDate: PropTypes.string,
    imdbRating: PropTypes.string,
    rottenTomatoRating: PropTypes.string,
  }).isRequired,
};

export default Cart;
