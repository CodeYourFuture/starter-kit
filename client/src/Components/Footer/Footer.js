import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://www.codeyourfuture.io/">Website</a>
        <a href="https://docs.codeyourfuture.io/">Documentation</a>
        <a href="https://github.com/codeyourfuture/">GitHub</a>
        <a href="https://twitter.com/CodeYourFuture">Twitter</a>
        <a href="https://www.instagram.com/codeyourfuture_/">Instagram</a>
        <a href="https://www.facebook.com/codeyourfuture.io">Facebook</a>
      </div>
      <p>&copy; {new Date().getFullYear()} CodeYourFuture</p>
    </footer>
  );
};

export default Footer;
