import React, { useState } from "react";
import validator from "validator";

const Contact = () => {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <div
        style={{
          margin: "auto",
          marginLeft: "300px",
        }}
      >
        <pre>
          <h2>Contact Us</h2>
          <span>Enter Email: </span>
          <input
            type="text"
            id="userEmail"
            onChange={(e) => validateEmail(e)}
          ></input>{" "}
          <br />
          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {emailError}
          </span>
        </pre>
      </div>
    </div>
  );
};

export default Contact;
