import React from "react";
import { TableEmployees } from "../components/TableEmployees.jsx";
import { FormEmployee } from "../components/FormEmployee.jsx";

export const Employee = () => {
  return (
    <>
      <FormEmployee></FormEmployee>
      <TableEmployees> </TableEmployees>
    </>
  );
};
