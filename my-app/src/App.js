import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css'
import Footer from './components/Footer/Footer.js';
import './components/Footer/Footer.css';



const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;


