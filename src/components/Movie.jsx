import { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Movie() {
  const [movies, setMovies] = useState([]); // Store all movies
  const [filteredMovies, setFilteredMovies] = useState([]); // Store filtered movies
  const [activeCategory, setActiveCategory] = useState(""); // Store the active category
  const [searchQuery, setSearchQuery] = useState(""); // Store the search query

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("https://backend-n5by.onrender.com/Movie");
        console.log(res.data);

        // Sort movies by release_date in descending order (newest first)
        const sortedMovies = res.data.sort((a, b) => {
          return new Date(b.release_date) - new Date(a.release_date);
        });

        setMovies(sortedMovies);
        setFilteredMovies(sortedMovies);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  // Handle category filtering
  const handleFilter = (category) => {
    setActiveCategory(category); // Set active category
    applyFilters(category, searchQuery); // Apply both filters
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Update search query
    applyFilters(activeCategory, query); // Apply both filters
  };

  // Function to apply category & search filters
  const applyFilters = (category, query) => {
    let filtered = movies;

    if (category) {
      filtered = movies.filter((movie) => movie.category === category);
    }

    if (query) {
      filtered = filtered.filter((movie) =>
        movie.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
  };

  return (
    <div className="pt-28 max-w-screen-2xl container mx-auto md:px-20 px-4">
      {/* Welcome Section */}
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl">
          We are delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center m-10">
        {["", "Hollywood", "Bollywood", "Web Series"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`p-3 border rounded shadow-sm cursor-pointer ${
              activeCategory === category ? "bg-pink-500 text-white" : ""
            }`}
          >
            {category || "All"}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mt-10">
        <label className="px-3 py-2 border rounded-md flex items-center w-full md:w-1/2 gap-2">
          <input
            type="text"
            className="grow outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      {/* Movie Grid Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((item) => <Cards key={item.id} item={item} />)
        ) : (
          <p className="text-center">No movies found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Movie;
