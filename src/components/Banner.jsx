import "react";
import banner from "/output.jpg";


function Banner() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-6 justify-center items-center container mx-auto md:px-20 px-4 my-10">
      
      {/* Left Section */}
      <div className="md:w-1/2 mt-12 text-center md:text-left">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            Hello, welcome! Watch something{" "}
            <span className="text-pink-500">new every day!!!</span>
          </h1>
          <p className="text-sm md:text-xl">
            Ever thought about how movies are like mirrors? They show us the 
            world the way we want to see it… or sometimes the way we need to see it.
          </p>

          {/* Email Input */}
          <label className="input input-bordered flex items-center gap-2 w-full md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>

          {/* Button */}
          <button 
  className="btn mt-4 btn-secondary pl-10 pr-10 md:w-auto" 
  onClick={() => alert("Thank you for visiting!")}
>
  Get Started
</button>

        </div>
      </div>

      {/* Right Section (Image) */}
      <div className=" pt-9 flex justify-center items-center w-full md:w-1/2">
        <img src={banner} className="w-72 h-72 md:w-96 md:h-96 rounded" alt="Banner"/>
      </div>
      

    </div>
  );
}

export default Banner;
