import './Reset.css';
import "./Scss/style.css";
import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import Home from "./Pages/Home";
import Portfolio from './Pages/Portfolio';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';


function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''} className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/portfolio" element={<Portfolio />}/>
        <Route exact path="/gallery" element={<Gallery />}/>
        <Route exact path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;