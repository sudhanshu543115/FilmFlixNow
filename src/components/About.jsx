import  "react";
import about from "/ill-think-about-it.jpg" 

function About() {
  return (
    <div className="about-page  text-white min-h-screen">
      {/* Header Section */}
      

      {/* Main Content Section */}
      <div className="pt-24"> {/* Added padding to prevent content from being hidden behind navbar */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex justify-center">
              <img
                src={about}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-black">
              <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
              <p className="  text-lg leading-relaxed mb-6">
                At FilmFlixNow, we bring the magic of movies to your screens. Whether you’re into the latest
                blockbusters, timeless classics, or indie gems, we have it all. Our mission is to provide you with a seamless
                streaming experience, offering access to thousands of movies and TV shows at the touch of a button.
              </p>
              <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
              <p className="text-lg leading-relaxed mb-6">
                Our platform offers a curated collection of films and series across multiple genres. From drama to
                sci-fi, we ensure that you can always find something to suit your mood. With FilmFlixNow, enjoy high-quality
                streaming, personalized recommendations, and features like watchlists, reviews, and much more.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed mb-6">
                We envision a world where entertainment is not only accessible but also enjoyable. A world where
                the power of storytelling can transport you to new realms, teach you valuable lessons, and connect you with
                others who share your passion. FilmFlixNow strives to create an immersive environment that lets you dive
                deep into the world of cinema.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-gray-800 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              At FilmFlixNow, we believe in the power of cinema to inspire, entertain, and connect people. Our mission is
              to curate an ever-expanding library of movies and TV shows that users can access anytime, anywhere, and enjoy
              without barriers. Were here to create a platform that feels like home for movie lovers everywhere.
            </p>
          </div>
        </section>

        {/* Footer Section */}
        
      </div>
    </div>
  );
}

export default About;
