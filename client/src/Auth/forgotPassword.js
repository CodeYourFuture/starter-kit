import React, { useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("api/forgot_password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success(`Email sent to ${email}`);
      })
      .catch((error) => {
        toast.error("Failed to send email. Please try again.");
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
};

export default ForgotPassword;