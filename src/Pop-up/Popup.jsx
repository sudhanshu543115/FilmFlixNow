import  "react";

// eslint-disable-next-line react/prop-types
const Popup = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.id === "popup-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="popup-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center animate-fade-in">
        <h2 className="text-lg font-bold">Welcome to FilmFlixNow!</h2>
        <p className="text-red-600 mt-2 font-medium">
          PLEASE WAIT FOR SOME MOMENTS WHILE LOADING THE MOVIES. <br />
         <p className="bg-gray-400"> PLEASE BE PATIENT</p>
        </p>
        <p className="text-gray-600 mt-2">Enjoy the best movies and TV shows.</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
