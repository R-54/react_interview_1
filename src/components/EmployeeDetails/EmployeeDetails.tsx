import classes from "./EmployeeDetails.module.css";
import { useContext, useEffect } from "react";
import { AppContext } from "../../state/context";

export function EmployeeDetails() {
  const { state, dispatch } = useContext(AppContext);
  const { employee } = state;

  const onCloseDetails = () => {
    dispatch({ type: "set_employee", payload: null });
  };

  return (
    <div className={classes.employee_details}>
      <button className={classes.close} onClick={onCloseDetails}>
        X
      </button>
      <div>{employee.name}</div>
      <div>{employee.email}</div>
      <div>{employee.address.street}</div>
      <div>{employee.address.suite}</div>
      <div>{employee.address.city}</div>
      <div>{employee.address.zipcode}</div>
      <div>{employee.phone}</div>
      <div>{employee.company.name}</div>
      <div>{employee.role}</div>
    </div>
  );
}
