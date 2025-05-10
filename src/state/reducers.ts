export function reducer(state, action) {
  switch (action.type) {
    case "set_loading":
      return { ...state, loading: action.payload };
    case "set_error":
      return { ...state, error: action.payload };
    case "set_users":
      return { ...state, users: action.payload };
    case "set_filter":
      return { ...state, filter: action.payload };
    case "set_dropdown_filter":
      return { ...state, dropdownFilter: action.payload };
    case "sort_users_by_name":
      return {
        ...state,
        reversed: !state.reversed,
        users: (() => {
          const sortedUsers = state.users.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (b.name > a.name) return -1;
            return 0;
          });
          return state.reversed ? sortedUsers.reverse() : sortedUsers;
        })(),
      };
    default:
      return state;
  }
}
