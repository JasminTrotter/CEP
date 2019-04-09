import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
    return(
        <footer>
              <div className="contact-links">
                  <div className="contact-link">
                      <button onClick={() => window.open('mailto:tess@cepcommunications.com')}>
                      <i className="far fa-envelope"></i>
                      </button> 
                  </div>

                  <div className="contact-link">
                      <button onClick={() => window.open('https://www.instagram.com/tess.trotter/')}>
                      <i className="fab fa-instagram"></i>
                      </button>
                  </div>
              </div>
              <p id="location">
                <span role="img" alt="location pin" aria-label="pin">&#128205;</span> Based in (but not limited to) Los Angeles, CA.
                </p>
            </footer>
    );
}