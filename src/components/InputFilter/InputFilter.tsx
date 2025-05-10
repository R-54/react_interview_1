import classes from "./InputFilter.module.css";
import { useContext } from "react";
import { AppContext } from "../../state/context";

export function InputFilter() {
  const { state, dispatch } = useContext(AppContext);

  function onChangeInput(e) {
    dispatch({ type: "set_filter", payload: e.target.value.toLowerCase() });
  }

  return (
    <input
      className={classes.filter}
      placeholder="Filter by name or username"
      value={state.filter}
      onChange={onChangeInput}
    />
  );
}
