import { useState, useEffect } from "react";
import { Employee } from "./page/Employee.jsx";
import { Home } from "./page/Home.jsx";
import { EditEmployee } from "./page/EditEmployee.jsx";
import { Tasks } from "./page/Tasks.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu.jsx";
import { RegisterNewUser } from "./page/RegisterNewUser.jsx";

function App() {
  const [name, setName] = useState("Justine");
  const [isLogIn, setLogIn] = useState(false);

  const validateToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogIn(true);
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <>
      <BrowserRouter>
        {isLogIn && <Menu auth={setLogIn} />}
        <Routes>
          <Route path="/registernewuser" element={<RegisterNewUser />} />
          <Route path="/" element={<Home auth={setLogIn} userName={name} />} />
          {isLogIn && <Route path="/employee" element={<Employee />} />}
          {isLogIn && (
            <Route
              path="/editEmployee/:employee_id"
              element={<EditEmployee />}
            />
          )}
          {isLogIn && <Route path="/task/:employee_id" element={<Tasks />} />}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
