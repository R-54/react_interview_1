import { useReducer } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { reducer } from "./state/reducer";
import { initialState } from "./state/initialState";
import { AppContext } from "./state/context";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Home />
    </AppContext.Provider>
  );
}

export default App;
