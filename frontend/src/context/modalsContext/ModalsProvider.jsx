import React, { useReducer } from "react";
import { ModalsContext } from "./modalsContext";
import { initialState, modalsReducer } from "./modalsReducer";

export function ModalsProvider({ children }) {
  const [state, dispatch] = useReducer(modalsReducer, initialState);

  return (
    <ModalsContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalsContext.Provider>
  );
}
