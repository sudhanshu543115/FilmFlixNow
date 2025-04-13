import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import img from "/public/image-loader.gif";
import Card2 from "./Card2";





function MovieDetails() {
  
// new released movies section from the


  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(`https://backend-n5by.onrender.com/Movie/${id}`);
        setMovie(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch movie details");
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container mx-auto pt-20 flex flex-col md:flex-row items-center">
        {/* Movie Poster */}
        <div className="flex justify-center items-center">
          <img
            src={movie.main_image}
            alt={movie.name}
            className="   md:w-1/3 rounded-lg shadow-lg"
          />
        </div>

        {/* Movie Details */}
        <div className="flex flex-col ml-4 mr-4 mt-6 md:ml-8 md:mr-24 md:mt-0">
          <h1 className="text-4xl font-bold">{movie.name}</h1>
          <hr />
          <p className="text-gray-600">{movie.details}</p>
          <hr />
          <p className="mt-2">
            <span className="font-bold text-blue-500">Category:</span>{" "}
            {movie.category}
          </p>
          <hr />
          <p>
            <span className="font-bold text-blue-500">Language:</span>{" "}
            {movie.language}
          </p>
          <hr />
          <p>
            <span className="font-bold text-blue-500">Release Date:</span>{" "}
            {movie.release_date}
          </p>
          <hr />
          <p>
            <span className="font-bold text-blue-500">Actors:</span>{" "}
            {movie.actors}
          </p>
          <hr />
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Telegram
          </button>
        </div>
      </div>
      <div className="mt-14">
                <h1 className="flex justify-center items-center font-bold text-orange-600 text-3xl">
                  Screenshot images <p className="text-blue-300">(comming soon)</p>
                </h1>
                <div className="flex justify-center items-center gap-14 mt-10">
                  <div>
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                  </div>
                  <div>
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
      <div className="flex flex-col gap-4 mt-6 items-center">
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
          <a href={movie.Download} target="_blank" rel="noopener noreferrer">
            Download -- [360P] [480P] [720P] [1080P]
          </a>
        </button>
      </div>

      <div className="flex justify-center items-center pt-6">
          <p className="font-extrabold">
            अगर आप कोई MOVIE FULL HD में देखना चाहते हैं 
            तो आप हमारे टेलीग्राम<hr />
            चैनल से जुड़ें, संदेश देकर मूवी का नाम और क्वालिटी बताएं, आपकी मूवी
            तुरंत मिल जाएगी.... 😊<hr />
          </p>{" "} 
        </div>
        <div className="flex justify-center items-center ">
          <button className="mt-6 bg-pink-500 text-white px-4  py-2 rounded-md hover:bg-pink-700 duration-300">
            <a href="https://t.me/filmflixnow">Telegram</a>
          </button>
        </div>

      
      <div className="flex items-start">
          <h1 className="text-xl ml-10 mt-9 md:text-4xl">
            Recently released <span className="text-pink-500">Movies :- )</span>
          </h1>
          <div>
            
         
           
          </div>
        </div>
        <div>
        <Card2   />
        </div>

     
    </div>
  );
}

export default MovieDetails;
