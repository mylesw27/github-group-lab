
import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Details from './components/Details'
import {bios} from './bios'
import Header from './partials/Header'
import Footer from './partials/Footer'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:id" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
