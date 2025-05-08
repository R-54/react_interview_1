import { useContext, useState } from "react";
import { ROLES_ENUM } from "../../utils/utils";
import { AppContext } from "../../state/context";

export function Filter() {
  const [selected, setSelected] = useState("");
  const { dispatch } = useContext(AppContext);

  const onSelectChange = (e) => {
    setSelected(e.target.value);
    dispatch({ type: "set_filter", payload: e.target.value });
  };

  return (
    <select value={selected} onChange={onSelectChange}>
      <option value="">-- Select a role --</option>
      {ROLES_ENUM.map((role) => {
        return (
          <option key={role} value={role}>
            {role}
          </option>
        );
      })}
    </select>
  );
}
