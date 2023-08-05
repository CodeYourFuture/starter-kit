// Home.js
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import LoginButtons from "./LoginButtons";


const Home = () => {
  return (
    <div>
<Navbar />
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "20vh" }}>
      <button style={{ width: "900px", padding: "10px", fontSize: "40px" }}>
        Welcome to CYF Progress Tracker
      </button>
    </div>

    <LoginButtons />
<Footer />
    </div>
  );
};

export default Home;
