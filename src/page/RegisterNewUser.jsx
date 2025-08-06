import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endpoint = "register";

export const RegisterNewUser = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `${baseUrl}${endpoint}`;
    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    setNewUser(data);
  };

  const handleEmail = (event) => {
    newUser.email = event.target.value;
  };
  const handlePassword = (event) => {
    newUser.password = event.target.value;
  };
  const handleFirst_Name = (event) => {
    newUser.first_name = event.target.value;
  };
  const handleLast_Name = (event) => {
    newUser.last_name = event.target.value;
  };

  const handleReturn = () => {
    navigate("/");
  };
  return (
    <>
      <h1>Register For Our Site:</h1>
      <main className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label">Email</label>
            <input
              onChange={handleEmail}
              type="text"
              className="form-control"
              required
            />
          </div>
          <div>
            <label className="form-label">Password</label>
            <input
              onChange={handlePassword}
              type="password"
              className="form-control"
              required
            />
          </div>
          <div>
            <label className="form-label">First Name</label>
            <input
              onChange={handleFirst_Name}
              type="text"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label">Last Name</label>
            <input
              onChange={handleLast_Name}
              type="text"
              className="form-control"
            />
          </div>

          <br />
          <button
            onClick={handleReturn}
            type="submit"
            className="btn btn-primary"
          >
            Save Data
          </button>
          <button className="btn btn-danger" onClick={handleReturn}>
            Return
          </button>
        </form>
      </main>
    </>
  );
};
