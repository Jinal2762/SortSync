import React, { useState } from 'react';
import Algo from '../Sorting/Algo';
import Bst from '../Optimalbst/Bst';
import Home from '../Home/Home';
import '../Optimalbst/Bst.css'
import '../Sorting/Algo.css'
import '../Home/Home.css'

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    if (currentPage !== page) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <div className="navbar">
        <div id="navbar-brand">
          <h3 id="heading1">
            <img src={require('./Sortnew.png')} id='logo' alt="logo here" />
          </h3>
        </div>
        <button id="bst" onClick={() => handleNavigation('bst')}>
          <span id="htmltxt">Optimal BST</span>
        </button>
        <button id="algo" onClick={() => handleNavigation('algo')}>
          <span id="htmltxt">Algorithms</span>
        </button>
        <button id="home" onClick={() => handleNavigation('home')}>
          <span id="htmltxt">Home</span>
        </button>
      </div>
      <br></br>
      <div id="container">
        {currentPage === 'bst' && <Bst />}
        {currentPage === 'algo' && <Algo />}
        {currentPage === 'home' && <Home />}
      </div>
    </div>
  );
}