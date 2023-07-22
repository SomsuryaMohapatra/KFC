import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [signUpCredintials, setSignUpCredintials] = useState({
    name: "",
    location: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setSignUpCredintials({
      ...signUpCredintials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: signUpCredintials.name,
        location: signUpCredintials.location,
        email: signUpCredintials.email,
        password: signUpCredintials.password,
      }),
    });
    const responseData = await response.json();
    if(responseData.success){
        navigate("/login");
    }
    console.log(responseData);
  };

  return (
    <div className="container my-5">
      <h2>Signup to continue to use KFC</h2>
      <form className="my-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={handleOnChange}
            name="name"
            value={signUpCredintials.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            onChange={handleOnChange}
            name="location"
            value={signUpCredintials.location}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            name="email"
            value={signUpCredintials.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handleOnChange}
            name="password"
            value={signUpCredintials.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
}
