/** @format */

import React, { CSSProperties, useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Check if email or password is empty
    if (!email || !password) {
      alert("Email and password cannot be empty.");
      return;
    }

    // Simulate a fetch request to a mock API
    fetch("https://example.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle success (e.g., navigate to another page or display a success message)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors (e.g., display an error message)
      });
  };

  const inputStyle: CSSProperties = {
    width: "85%",
    height: "30px",
    margin: "5px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "49%",
        height: "300px",
      }}
    >
      <form>
        <input
          style={inputStyle}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
        style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Log In</button>
      </form>
      <p>Forgot Password?</p>
      <p>Create a Page for a celebrity, brand or business.</p>
    </div>
  );
};

export default Form;
