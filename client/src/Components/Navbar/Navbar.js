import React from "react";
import "./Navbar.css";



const Navbar = () => {

  const handleEmailButtonClick = () => {
    window.location.href = "mailto:recipient@example.com";
  };

  return (
    <nav>
      <div className="logo">
        <img src="https://syllabus.codeyourfuture.io/img/logo.png" alt="Your Logo" />
      </div>
      <ul className="nav-links">
        <li>
        <a href="/"> <button>Home</button> </a>
        </li>
        <li>
          <button onClick={handleEmailButtonClick}>Contact Support</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
