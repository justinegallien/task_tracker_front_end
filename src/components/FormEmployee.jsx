import React, { useState } from "react";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "employee";

export const FormEmployee = () => {
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    department: "",
    role: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();

    const url = baseUrl + endPoint;
    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newEmployee),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();
    console.log(data);

    window.location.reload();
  };

  const handlerName = (event) => {
    newEmployee.name = event.target.value;
  };

  const handlerDepartment = (event) => {
    newEmployee.department = event.target.value;
  };

  const handlerRole = (event) => {
    newEmployeen.role = event.target.value;
  };

  return (
    <>
      <h1>Employee Form</h1>
      <main className="container ml-2 mr-2 mb-5">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              onChange={handlerName}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Department</label>
            <select
              onChange={handlerDepartment}
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
              onChange={handlerRole}
              type="text"
              className="form-control"
            />
          </div>

          <button className="btn btn-primary w-100">Save Data</button>
        </form>
      </main>
    </>
  );
};
