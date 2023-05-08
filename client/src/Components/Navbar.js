import React from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

import Home from "/Users/admin/Desktop/Newsletter-Signup/CodeCrafters-YIT/client/src/pages/Home.js"
// import About from "./Components/About";
// import Contact from "./Components/Contact"
// import Portfolio from "./Components/Portfolio";



function App() {
  return (
    <div>

    <header>
     <nav>
     <h1>Logo</h1>
     <NavLink to="/">Home</NavLink>
     {/* <NavLink to="About">About</NavLink>
     <NavLink to="Contact">Contact Us</NavLink>
     <NavLink to="Portfolio">Portfolio</NavLink> */}
     </nav>
    </header>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
