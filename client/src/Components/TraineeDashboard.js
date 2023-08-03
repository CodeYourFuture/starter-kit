import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function TraineeDashboard() {
  const [selectedValue, setSelectedValue] = useState("Open this select menu");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
     <Navbar />
    <select className="form-select" aria-label="Default select example" value={selectedValue} onChange={handleChange}>
      <option selected>Open this select menu</option>
      <option value="1">codewars</option>
      <option value="2">attendance</option>
      <option value="3">codility</option>
    </select>
    <Footer />
    </div>
  );
}

export default TraineeDashboard;

