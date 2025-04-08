import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2E3840",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

reportWebVitals();
