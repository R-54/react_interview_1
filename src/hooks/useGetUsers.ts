import { useContext, useEffect } from "react";
import { AppContext } from "../state/context";

export function useGetUsers() {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    const asyncHelper = async () => {
      dispatch({ type: "set_loading", payload: true });
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        dispatch({ type: "set_users", payload: json });
      } catch (error) {
        dispatch({ type: "set_error", payload: error });
      } finally {
        dispatch({ type: "set_loading", payload: false });
      }
    };

    asyncHelper();
  }, []);
}
