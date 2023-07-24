import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginCredentials.email,
        password: loginCredentials.password,
      }),
    });

    if (response.status === 200) {
      const responseData = await response.json();
      localStorage.setItem("authToken", responseData.Auth_Token);
      navigate("/");
    } else if (response.status === 400) {
      alert("Please enter correct credentials");
    } else {
      alert("Internal Server Error");
    }
  };
  return (
    <div className="container my-5">
      <h2>Login to KFC</h2>
      <form className="my-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={loginCredentials.email}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={loginCredentials.password}
            onChange={handleOnChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Login
        </button>
        <span className="ms-5">
          Don't have KFC account ?{" "}
          <Link to="/createuser">Create your KFC account</Link>
        </span>
      </form>
    </div>
  );
}
