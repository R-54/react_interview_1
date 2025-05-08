import { useContext } from "react";
import classes from "./Employee.module.css";
import { AppContext } from "../../state/context";

export function Employee({ employee }) {
  const { dispatch } = useContext(AppContext);
  const { name, email, company, role } = employee;
  const onClickEmployee = () => {
    dispatch({ type: "set_employee", payload: employee });
  };

  return (
    <div className={classes.employee} onClick={onClickEmployee}>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Company: {company.name}</div>
      <div>Role: {role}</div>
    </div>
  );
}
