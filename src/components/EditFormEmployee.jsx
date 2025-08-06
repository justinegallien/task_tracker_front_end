import React from "react";
import { useState, useEffect } from "react";
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

  const getEmployeeById = async () => {
    const { employee_id } = params;
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const endPoint = "employee";
    const url = `${baseUrl}${endPoint}/${employee_id}`;
 const token = localStorage.getItem("token");

    const result = await fetch(url, {
      headers: {
        Authorization: token,
      },
    });
    const data = await result.json();
    const element = data[0];

    const { name, department, role } = element;

    setEmployeeEdit({
      name,
      department,
      role,
    });
  };

  const submitHandler = async () => {
    event.preventDefault();

    const employee_id = params.employee_id;
    const url = `${baseUrl}${endPoint}/${employee_id}`;
const token = localStorage.getItem("token");
    console.log(url);

    const result = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(employeeEdit),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await result.json();

    navigate("/employee");
  };

  useEffect(() => {
    getEmployeeById();
  }, []);

  return (
    <>
      <h1>Edit Employee</h1>

      <main className="container ml-2 mr-2 mb-5">
        <form onSubmit={submitHandler}>
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
            <input
              name="department"
              onChange={formHandler}
              className="form-select"
              aria-label="Default select example"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <input
              name="role"
              onChange={formHandler}
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
