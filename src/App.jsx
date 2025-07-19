import { useState } from "react";
import { Employee } from "./page/Employee.jsx";
import { Home } from "./page/Home.jsx";
import { EditEmployee } from "./page/EditEmployee.jsx";
import { Tasks } from "./page/Tasks.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/editEmployee/:employee_id" element={<EditEmployee />} />
          <Route path="/task/:employee_id" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
