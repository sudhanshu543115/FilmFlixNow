import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import MessageBox from "../../Chatbot.jsx/Message";

function Homemovies() {
  const [Movie, setMovie] = useState([]);

 

  useEffect(() => {
    const getMovie = async () => {
      try {
       // const res = await axios.get("http://localhost:4004/Movie");
       const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/Movie`);
        console.log(res.data);
  
        // Sort movies by release_date in descending order
        const sortedMovies = res.data.sort((a, b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          return dateB - dateA; // Descending order
        });

        setMovie(sortedMovies);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);

  return (
    <>
      <div className="pt-28 max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Were delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <MessageBox/>

          
          
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              <a href="https://t.me/filmflixnow"> Join Our Telegram</a>
            </button>

        
        </div>
        <div>
          {Movie.slice(0, 10).map((item) => ( // Display only the first 10 items
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
          <Link to="/Movie">
          
          <button className="  mb-5 bg-gray-600 text-white px-3 py-1 sm:p-4 mt-4 text-sm sm:text-base rounded-md hover:bg-yellow-700 duration-300">
            More
          </button>
        </Link>
        </div>
    </>
  );
}

export default Homemovies;
