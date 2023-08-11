import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className='p1'>
          Sorting and Optimal BST Visualizer &copy; {new Date().getFullYear()}
          <span className="social-icons">
            <a href="#" className="icon-link ">
              <FontAwesomeIcon className='p1' icon={faTwitter} />
            </a>
            <a href="#" className="icon-link ">
              <FontAwesomeIcon className='p1' icon={faFacebook} />
            </a>
            <a href="#" className="icon-link ">
              <FontAwesomeIcon className='p1' icon={faInstagram} />
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
