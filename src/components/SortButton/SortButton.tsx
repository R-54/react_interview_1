import classes from "./SortButton.module.css";
import { useContext } from "react";
import { AppContext } from "../../state/context";

export function SortButton() {
  const { dispatch } = useContext(AppContext);
  const onClickSort = () => {
    dispatch({ type: "sort_users_by_name" });
  };
  return (
    <button className={classes.button} onClick={onClickSort}>
      Sort by Name
    </button>
  );
}
