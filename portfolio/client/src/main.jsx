import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
// import * as tf from "@tensorflow/tfjs";
// import "@tensorflow/tfjs-backend-webgl"; // WebGL backend
// import "@tensorflow/tfjs-backend-wasm"; // Optional: WASM backend

// Set WebGL backend as default
// tf.setBackend("webgl").then(() => {
//   console.log("WebGL backend set successfully.");
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
