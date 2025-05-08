import classes from "./EmployeeList.module.css";
import { useContext } from "react";
import { AppContext } from "../../state/context";
import { Employee } from "../Employee/Employee";

export function EmployeeList() {
  const { state } = useContext(AppContext);

  const employeesList = state.data
    .filter(({ role }) => !state.filter || role === state.filter)
    .map((employee) => {
      return <Employee key={employee.id} employee={employee} />;
    });

  return (
    <div className={classes.employee_list}>
      {state.loading ? <div>Loading...</div> : employeesList}
    </div>
  );
}
