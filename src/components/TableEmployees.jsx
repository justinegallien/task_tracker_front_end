import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "employee";

export const TableEmployees = () => {
  const navigate = useNavigate();

  const [dataEmployee, setDataEmployee] = useState([]);

  const getEmployees = async () => {
    const url = baseUrl + endPoint;
    const token = localStorage.getItem("token");
    const result = await fetch(url, {
      headers: {
        'Authorization': token,
      },
    });
    const data = await result.json();
    setDataEmployee(data);
  };

  const handleEdit = (id) => {
    navigate(`/editEmployee/${id}`);
  };

  const handleDelete = async (id) => {
    const url = `${baseUrl}${endPoint}/${id}`;
    const token = localStorage.getItem("token");
    const result = await fetch(url, {
      method: "DELETE",
      headers: {
        'Authorization': token,
      },
    });

    const data = await result.json();

    window.location.reload();
  };

 const taskHandler = (id) => {
   navigate(`/tasks/${id}`);
 };


  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <h1>Employee Data Base</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {dataEmployee.map((item) => (
            <tr key={item.employee_id}>
              <td> {item.name} </td>
              <td> {item.department} </td>
              <td> {item.role} </td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => handleEdit(item.employee_id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleDelete(item.employee_id)}
                >
                  Delete
                </button>
              </td>

              <td>
                <button
                  type="button"
                  className="btn btn-info m-1"
                  onClick={() => taskHandler(item.getEmployees_id)}
                >
                  <i className="bi bi-list-check"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
