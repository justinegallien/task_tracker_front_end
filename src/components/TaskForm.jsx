import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "tasks";

export const TaskForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { employee_id } = params;
  const [task, setTask] = useState({
    employee_id: employee_id,
    role: "",
  });

  const formHandler = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    task[inputName] = inputValue;
  };

  const submitHandler = async () => {
    event.preventDefault();
    const url = `${baseUrl}${endPoint}`;
    const token = localStorage.getItem("token");
    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
        'Authorization': token,
      },
    });

    const data = await result.json();

    window.location.reload();
  };

  const returnHandler = () => {
    navigate("/employee");
  };

  return (
    <>
      <main className="container ml-2 mr-2 mb-5 mt-5">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <input
              name="role"
              onChange={formHandler}
              type="text"
              className="form-control"
            />
          </div>

          <button className="btn btn-info w-100">Save</button>
        </form>
        <button className="btn btn-success mt-3 w-100" onClick={returnHandler}>
          Return
        </button>
      </main>
    </>
  );
};
