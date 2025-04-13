import "react";
import Home from "./routes/home/Home";
import { Route, Routes } from "react-router-dom";
import Movies from "./routes/movies/Movies";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import MovieDetails from "./routes/MovieDetails/MovieDetails";

import { useState, useEffect } from "react";
import Popup from "./Pop-up/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup when the component mounts
    setShowPopup(true);
  }, []);

  return (
    <>
      <div>
        <div>
          {showPopup && <Popup onClose={() => setShowPopup(false)} />}
          
          {/* Rest of your website content */}
        </div>
      </div>
      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movie" element={<Movies />} />{" "}
          {/* {authUser ? <Movies /> : <Navigate to="/signup" />}          /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        </Routes>
        <Toaster />
        <Footer />
      </div>
    </>
  );
}

export default App;
