import React, { useState } from "react";
import gmail from '../../assets/gmail.png'
import linkedin from '../../assets/linkedin.png'
import Github from '../../assets/Github.svg'

function Contact({ isDarkMode }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("Your message to me", formData)
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div
    
      className={`min-h-screen flex  flex-col items-center p-8 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}`}
    >
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className={`w-full max-w-2xl  rounded-lg p-6 ${isDarkMode?"bg-gray-900 text-white border":"bg-white border text-black shadow-lg"}`}>
        <h2 className="text-xl font-semibold mb-4 text-center">I’d Love to Hear from You!</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              required
              value={formData.firstName}
              onChange={handleChange}
              className={`p-2 border rounded w-full ${isDarkMode?"bg-gray-700":"bg-gray-100 text-black"}`}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              required
              value={formData.lastName}
              onChange={handleChange}
              className={`p-2 border rounded w-full ${isDarkMode?"bg-gray-700":"bg-gray-100 text-black"}`}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={handleChange}
              className={`p-2 border rounded w-full ${isDarkMode?"bg-gray-700":"bg-gray-100 text-black"}`}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={`p-2 border rounded w-full ${isDarkMode?"bg-gray-700":"bg-gray-100 text-black"}`}
            />
          </div>
          <textarea
            name="message"
            placeholder="Write your message... *"
            required
            value={formData.message}
            onChange={handleChange}
            className={`p-2 border rounded w-full ${isDarkMode?"bg-gray-700":"bg-gray-100 text-gray-900"}`}
          ></textarea>
          <div className="flex items-center justify-center w-3/12 mx-auto">

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
          </div>
        </form>
        {submitted && <p className="text-green-500 mt-2">Thank you for contacting me!</p>}
        
        <div className="mt-6 text-center">
          <p>Or reach out directly through:</p>
          <hr className="border-t-1 border-gray-200 mb-4 mt-4" />
          <div className="flex justify-center gap-4 mt-4">
            <a href="mailto:satyendragautam507@gmail.com">
              <img src={gmail} alt="Gmail Icon" className="w-14 h-14" />
            </a>
            <a href="https://www.linkedin.com/in/satyendra-gautam-525220244/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="Linkedin Icon" className="w-14 h-14" />
            </a>
            <a href="https://github.com/satyendragautam901" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="Github Icon" className="w-14 h-14 bg-white rounded-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
