import { useReducer } from "react";
import { Home } from "./pages/Home/Home";
import { reducer } from "./state/reducers";
import { initialState } from "./state/initialState";
import { AppContext } from "./state/context";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Home />
    </AppContext.Provider>
  );
}
