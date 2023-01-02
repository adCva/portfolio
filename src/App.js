import './App.css';
import "./Scss/style.css";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Photography from "./Pages/Photography";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route}  from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''} className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/photography" element={<Photography />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;