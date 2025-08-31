import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      const message =
        err.response?.data?.message || err.response?.data || "Registration failed.";
      setError(message);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          value={inputs.username}
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>

        {err && (
          <p style={{ color: "red" }}>
            {typeof err === "string" ? err : err.message || "Something went wrong."}
          </p>
        )}

        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
