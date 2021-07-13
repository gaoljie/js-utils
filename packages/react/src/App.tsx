import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGlobalMutator, useGlobalState } from "./context";
import { Types } from "./context/action";

function App(): React.ReactNode {
  const { count, doubleCount } = useGlobalState();
  const dispatch = useGlobalMutator();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: Types.UPDATE_COUNT,
                payload: {
                  count: count + 1,
                },
              })
            }
          >
            count is: {count}
            double count is: {doubleCount}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
