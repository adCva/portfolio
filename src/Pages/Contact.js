import React, { useState } from 'react';
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, textArea);
  };


  return (
    <div>
      <Nav />
      <div className='contact-wrapper'>
        <div className='contact-container'>

          <div className='get-in-touch-container'>
            <h1>Get in Touch</h1>
            <div className='get-in-touch-text'>
              <p>Lorem ipsum dolor sit amet</p>
              <div className='get-in-touch-social'>
                <a>Git</a>
                <a>Linkedin</a>
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
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className='form-group'>
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className='form-group'>
                  <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)} />
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;