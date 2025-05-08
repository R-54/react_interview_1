import { assignRole } from "../utils/utils";

export function reducer(state, action) {
  switch (action.type) {
    case "set_data":
      return { ...state, data: assignRole(action.payload) };
    case "set_loading":
      return { ...state, loading: action.payload };
    case "set_error":
      return { ...state, error: action.payload };
    case "set_filter":
      return { ...state, filter: action.payload };
    case "set_employee":
      return { ...state, employee: action.payload };
    default:
      return state;
  }
}
