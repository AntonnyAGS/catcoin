import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { WorkManagerProvider } from "./contexts/work-manager.context";

ReactDOM.render(
  <React.StrictMode>
    <WorkManagerProvider>
      <App />
    </WorkManagerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
