import { useContext } from "react";
import { EmployeeList } from "../components/EmployeeList/EmployeeList";
import { Filter } from "../components/Filter/Filter";
import { useGetEmployees } from "../hooks/useGetEmployees";
import { AppContext } from "../state/context";
import { EmployeeDetails } from "../components/EmployeeDetails/EmployeeDetails";

export function Home() {
  const { state } = useContext(AppContext);

  useGetEmployees();

  return (
    <div>
      <Filter />
      <EmployeeList />
      {state.employee && <EmployeeDetails />}
    </div>
  );
}
