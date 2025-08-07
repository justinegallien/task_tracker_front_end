import React, { useState, useEffect } from "react";
import { use } from "react";
import { useParams } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "task";
const endPoint2 = "employee";

export const TasksTable = () => {
  const [tasks, setTasks] = useState([]);
  const [employee, setEmployee] = useState({});

  const params = useParams();

  const getTasks = async () => {
    const { employee_id } = params;
    const url = `${baseUrl}${endPoint}/${employee_id}`;
     const token = localStorage.getItem("token");
    const result = await fetch(url, {
      headers: {
        'Authorization': token,
      },
    });
    const data = await result.json();
    setTasks(data);
  };

  const getEmployee = async () => {
    const { employee_id } = params;
    const url = `${baseUrl}${endPoint2}/${employee_id}`;
    const token = localStorage.getItem("token");
    const result = await fetch(url, {
      headers: {
        'Authorization': token,
      },
    });
    const data = await result.json();
    console.log(data[0]);
    setEmployee(data[0]);
  };

  const deleteTask = async (id) => {
    const url = `${baseUrl}${endPoint}/${id}`;
    const token = localStorage.getItem("token");
    const result = await fetch(url, {
      method: "DELETE",
      headers: {
        'Authorization': token,
      },
    });

    window.location.reload();
  };

  useEffect(() => {
    getTasks();
    getEmployee();
  }, []);

  return (
    <>
    <h1> {employee.name}</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item) => (
            <tr key={item.task_id}>
              <td>{item.description}</td>
              <td>{item.status}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(item.task_id)}
                >
                  <i class="bi bi-file-earmark-minus"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
