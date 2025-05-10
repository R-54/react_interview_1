import classes from "./DropdownFilter.module.css";
import { useContext } from "react";
import { AppContext } from "../../state/context";

export function DropdownFilter() {
  const { state, dispatch } = useContext(AppContext);
  const getCities = () => {
    const citiesSet = new Set();
    state.users.forEach((user) => citiesSet.add(user.address.city));
    return Array.from(citiesSet);
  };
  const onChangeDropdown = (e) => {
    dispatch({ type: "set_dropdown_filter", payload: e.target.value });
  };

  return (
    <select
      className={classes.filter}
      value={state.dropdownFilter}
      onChange={onChangeDropdown}
    >
      <option value="">-- Filter by city --</option>
      {getCities().map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
}
