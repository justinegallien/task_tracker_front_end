import React from "react";
import { TaskForm } from "../components/TaskForm";
import { TasksTable } from "../components/TasksTable";

export const Tasks = () => {
  return (
    <>
      <TaskForm />
      <TasksTable />
    </>
  );
};
