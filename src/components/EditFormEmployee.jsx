import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "employee";

export const EditFormEmployee = () => {
  const navigate = useNavigate();

  const params = useParams();

  const [employeeEdit, setEmployeeEdit] = useState({
    name: "",
    department: "",
    role: "",
  });

  const formHandler = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    employeeEdit[inputName] = inputValue;
    console.log(employeeEdit);
  };

  const submintHandler = async () => {
    event.preventDefault();

    const id_employee = params.id_employee;

    const url = `${baseUrl}${endPoint}/${id_employee}`;

    console.log(url);

    const result = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(employeeEdit),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();

    navigate("/employee");
  };

  return (
    <>
      <h1>Edit Employee</h1>

      <main className="container ml-2 mr-2 mb-5">
        <form onSubmit={submintHandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="name"
              onChange={formHandler}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Department</label>
            <select
              name="department"
              onChange={formHandler}
              className="form-select"
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <input
              name="role"
              onChange={formHandler}
              type="date"
              className="form-control"
            />
          </div>

          <button className="btn btn-primary w-100">Save Data</button>
        </form>
      </main>
    </>
  );
};
