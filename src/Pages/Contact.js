import React, { useState } from 'react';
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [errorLocation, setErrorLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length === 0) {
      setErrorLocation("name");
    } else if (email.length === 0) {
      setErrorLocation("email");
    } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) { 
      setErrorLocation("email");
    } else if (textArea.length === 0) {
      setErrorLocation("textarea");
    } else {
      alert("Ev OK.");
      setErrorLocation("");
      setName("");
      setEmail("");
      setTextArea("");
    }

  };


  return (
    <div className='page-wrapper'>
      <header>
        <Nav />
      </header>
      <main>
        <div className='contact-container'>

          <div className='split-container'>
            <h1>Get in Touch</h1>
            <div className='get-in-touch-sub-container'>
              <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in Bucharest. But I’m also happy to hear about opportunities that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail.</p>
              <div className='get-in-touch-social'>
                <a href='https://github.com/adCva' target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href='https://www.linkedin.com/in/adrian-dobre-902303213/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
              </div>
            </div>
          </div>

          <div className='split-container'>
            <h1>Contact Me</h1>
            <div className='contact-form'>
              <form onSubmit={handleSubmit}>

                <div className='form-group'>
                  <label>Name:</label>
                  <input
                    name='userName'
                    type="text"
                    value={name}
                    placeholder="John Doe"
                    onChange={(e) => setName(e.target.value)}
                    className={errorLocation === "name" ? "input-error" : ""} 
                  />
                  <p className={errorLocation === "name" ? "error-message show-error-message" : "hide-error-message"}>This field is required</p>
                </div>

                <div className='form-group'>
                  <label>Email:</label>
                  <input
                    name='email'
                    type="email"
                    value={email}
                    placeholder="john.doe@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className={errorLocation === "email" ? "input-error" : ""} 
                  />
                  <p className={errorLocation === "email" ? "error-message show-error-message" : "hide-error-message"}>This field is required</p>
                </div>

                <div className='form-group'>
                  <label>Message:</label>
                  <textarea name='textarea' value={textArea} placeholder="How can I help?" onChange={(e) => setTextArea(e.target.value)} className={errorLocation === "textarea" ? "input-error" : "" } />
                  <p className={errorLocation === "textarea" ? "error-message show-error-message" : "hide-error-message"}>This field is required</p>
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>

        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Contact;