import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import About from './About'
import Dashboard from './dashboard/Dashboard'
import Error from './Error'

import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
