import  "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Homemovies from '../Homemovies/Homemovies'
import MovieList from "../../MovieList/MovieList";


function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Homemovies/>
      < MovieList />      
      
      
    </>
  );
}

export default Home;
