import { useState } from "react";
import contact from "/images.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Your message has been sent!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const openInstagram = () => {
    const appUrl = "instagram://user?username=__sudhanshu.18__";
    const webUrl = "https://www.instagram.com/__sudhanshu.18__";

    window.location.href = appUrl;

    setTimeout(() => {
      window.open(webUrl, "_blank");
    }, 500);
  };

  return (
    <div className="contact-page bg-white text-white min-h-screen py-16">
      {/* Header Section */}
      <header className="text-center text-black py-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl mt-4">We’d Love to Hear From You</p>
      </header>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex justify-center">
            <img
              src={contact}
              alt="Contact us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-blue-950">
            <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
            <p className="text-lg leading-relaxed mb-6">
              Whether you have a question about a movie, feedback, or anything
              else, feel free to reach out to us. We are here to assist you and
              provide the best streaming experience.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3  text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-lg mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3  text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-lg mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full p-3 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white text-lg rounded-lg focus:ring-blue-200 transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="m-5 bg-gray-300 py-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Other Ways to Reach Us
        </h3>
        <p className="text-lg text-gray-700 mb-4">Email us at:</p>
        <p className="text-lg text-pink-500 mb-6">support@filmflixnow.com</p>

        <p className="text-lg text-gray-700 mb-4">Follow us on social media:</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-pink-500 hover:text-gray-800 transition duration-200">
            Facebook
          </a>
          <a href="#" className="text-pink-500 hover:text-gray-800 transition duration-200">
            Twitter
          </a>
          <button
            onClick={openInstagram}
            className="text-pink-500 hover:text-gray-800 transition duration-200"
          >
            Instagram
          </button>
        </div>
      </section>
    </div>
  );
}

export default Contact;
