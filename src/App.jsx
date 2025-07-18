import { useState } from "react";
import { Employee } from "./page/Employee.jsx";
import { Home } from "./page/Home.jsx";
import { EditEmployee } from "./page/EditEmployee.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/editEmployee/:id_employee" element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
