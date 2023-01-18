import './Reset.css';
import "./Scss/style.css";
import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Photography from "./Pages/Photography";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''} className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/projects" element={<Projects />}/>
        <Route exact path="/photography" element={<Photography />}/>
        <Route exact path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;