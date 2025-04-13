import  "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import img from "./../../public/images.png";

function Cards({ item }) {
  
  return (
    <div className="mt-4 my-3 p-2">
      <div className="flex flex-col sm:flex-row items-center justify-between bg-base-100 shadow-xl rounded-lg hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 p-4">
        {/* Left Section */}
        <div className="flex items-center gap-10">
          {/* Image */}
          <div className=" flex-shrink-0 bg-slate-700">
            <img
               src={item.main_image} //when available
              alt=""
              className="w-20 h-20 rounded object-cover rounded-l-lg"
              onError={(e) => (e.target.src = {img})}
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center ml-4">
            {/* Name */}
            <div className="font-bold text-lg cursor-pointer mb-2">
              <Link to={`/MovieDetails/${item.id}`} className="flex hover:underline">
                {item.name} 
              </Link>
            </div>

            {/* Category and Language */}
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-secondary">{item.category}</span>
              <span className="badge badge-outline">{item.language}</span>
            </div>
          </div>
        </div>

        {/* Right Section: Download Button */}
        <div>
          <button   className="bg-pink-500 text-white px-3 py-1 sm:p-4 mt-4 text-sm sm:text-base rounded-md hover:bg-pink-700 duration-300">
          <Link to={`/MovieDetails/${item.id}`}>Download</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

// PropTypes validation
Cards.propTypes = {
  item: PropTypes.shape({
    main_image: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    release_date: PropTypes.string, // Add release_date if it's part of the item
    category: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cards;
