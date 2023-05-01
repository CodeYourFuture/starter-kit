import React, { useState } from "react";
import { toast } from "react-toastify";


const forgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/forgot_password?email=${email}`)
      .then((response) => response.text())
      .then((data) => {
        // console.log(data);
        toast.success(`Email send to ...${email}`)
      })
      .catch((error) => {
        toast.error('error');
      });
  };

  return (
   <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
   </div>
  );
}

export default forgotPassword