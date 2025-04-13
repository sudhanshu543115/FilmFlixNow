import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cards() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://backend-n5by.onrender.com/Movie")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 py-6">
      {movies.slice(0, 5).map((movie) => ( // Show only 5 movies
        <div
          key={movie.id}
          className="relative w-full h-64 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: `url(${movie.main_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Movie Info */}
          <div className="absolute bottom-3 left-3 text-white">
            <h2 className="text-base font-semibold">{movie.name}</h2>
            <p className="text-xs bg-pink-500 px-2 py-1 rounded-md inline-block">
              {movie.category}
            </p>
          </div>

          {/* Clickable Link */}
          <Link to={`/MovieDetails/${movie.id}`} className="absolute inset-0"></Link>
        </div>
      ))}
    </div>
  );
}

export default Cards;
