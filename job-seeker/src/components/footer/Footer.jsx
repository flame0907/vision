import React from 'react';
import './footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
         
          <p>© 2024 Vision, Inc</p>
        </div>
        <div className="footer-right">
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
