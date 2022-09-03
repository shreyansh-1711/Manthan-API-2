import './App.css';
import React from 'react'
import Home from './components/Home';
import FormPage from './components/FormPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/home" element={<Home key="home"/>}></Route>
          <Route exact path="/form" element={<FormPage key="form"/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
