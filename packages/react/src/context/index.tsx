import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { ContextState } from "./type";
import { Action } from "./action";
import reducer, { calculateState } from "./reducer";

export const GlobalStateContext = createContext<ContextState | undefined>(
  undefined
);

export const GlobalMutatorContext = createContext<Dispatch<Action> | undefined>(
  undefined
);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 }, calculateState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalMutatorContext.Provider value={dispatch}>
        {children}
      </GlobalMutatorContext.Provider>
    </GlobalStateContext.Provider>
  );
};

function useGlobalState(): ContextState {
  const state = useContext(GlobalStateContext);
  if (typeof state === "undefined") {
    throw new Error("expoState must be used within a ExpoProvider");
  }
  return state;
}

function useGlobalMutator(): Dispatch<Action> {
  const dispatch = useContext(GlobalMutatorContext);
  if (typeof dispatch === "undefined") {
    throw new Error("useExpoMutator must be used within a ExpoProvider");
  }
  return dispatch;
}

export { GlobalProvider, useGlobalState, useGlobalMutator };
