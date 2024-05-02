import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import PlayList from './components/PlayList';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="ease-in duration-200">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home/>} path='' />
          <Route element={<Contact/>} path='/contact' />
          <Route element={<PlayList/>} path='/playlist' />
          <Route element={<About/>} path='/about' />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
