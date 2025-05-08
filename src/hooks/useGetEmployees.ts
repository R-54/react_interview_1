import { useContext, useEffect, useState } from "react";
import { AppContext } from "../state/context";

export function useGetEmployees() {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "set_loading", payload: true });
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        dispatch({ type: "set_data", payload: json });
      } catch (error: any) {
        dispatch({ type: "set_error", payload: error });
      } finally {
        dispatch({ type: "set_loading", payload: false });
      }
    };
    fetchData();
  }, []);
}
