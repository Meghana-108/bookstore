// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">BookStore</h5>
            <p>Find your next favorite book at our store.</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">Privacy Policy</a></li>
              <li><a href="#!" className="text-dark">Terms of Service</a></li>
              <li><a href="#!" className="text-dark">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">Facebook</a></li>
              <li><a href="#!" className="text-dark">Twitter</a></li>
              <li><a href="#!" className="text-dark">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 BookStore
      </div>
    </footer>
  );
}

export default Footer;
