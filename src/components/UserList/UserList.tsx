import classes from "./UserList.module.css";
import { useContext, useMemo } from "react";
import { AppContext } from "../../state/context";
import { User } from "../User/User";

export function UserList() {
  const { state } = useContext(AppContext);

  return (
    <div className={classes.user_list}>
      {state.users
        .filter(
          (user) =>
            !state.dropdownFilter || user.address.city === state.dropdownFilter
        )
        .filter(
          (user) =>
            user.username.toLowerCase().includes(state.filter) ||
            user.name.toLowerCase().includes(state.filter)
        )
        .map((user) => (
          <User key={user.id} user={user} />
        ))}
    </div>
  );
}
