import React from "react";
import { useNavigate } from "react-router-dom";

export const Menu = ({ auth }) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    auth(false);
    navigate("/");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
          <a className="navbar-brand" href="/employee">
            Task Tracker
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a className="nav-link active" href="/">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/tasks">
                  Tasks
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex">
          <button onClick={logOut} className="btn btn-primary my-2 my-sm-0">
            Log Out
          </button>
        </div>
      </nav>
    </>
  );
};
