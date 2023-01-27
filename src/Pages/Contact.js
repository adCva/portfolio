import React, { useState } from 'react';
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length == 0 || email.length == 0 || textArea.length == 0) {
      setErrorStatus(true);
    } else {
      alert("Message sent.");
    }
  };


  return (
    <div>
      <Nav />
        <div className='contact-container'>

          <div className='get-in-touch-container'>
            <h1>Get in Touch</h1>
            <div className='get-in-touch-text'>
              <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunities that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
              <div className='get-in-touch-social'>
                <a><FaGithub /></a>
                <a><FaLinkedin /></a>
              </div>
            </div>
          </div>

          <div className='contact-form-container'>
            <h1>Contact Me</h1>
            <div className='contact-form'>
              <form onSubmit={handleSubmit}>

                <div className='form-group'>
                  <label>Name:</label>
                  <input
                    type="text"
                    value={name}
                    placeholder="John Doe"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p className={errorStatus ? "error-message show-error-message" : "hide-error-message"}>Error</p>
                </div>

                <div className='form-group'>
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    placeholder="john.doe@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className={errorStatus ? "error-message show-error-message" : "hide-error-message"}>Error</p>
                </div>

                <div className='form-group'>
                  <label>Message:</label>
                  <textarea value={textArea} placeholder="How can I help?" onChange={(e) => setTextArea(e.target.value)} />
                  <p className={errorStatus ? "error-message show-error-message" : "error-message hide-error-message"}>Error</p>
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>

        </div>
      <Footer />
    </div>
  )
}

export default Contact;