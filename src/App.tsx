import React, { useState } from "react";
import "./App.css";
import { AuthenticationPage } from "./Components/AuthenticationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={process.env.PUBLIC_URL + "/"}
          element={<AuthenticationPage />}
        ></Route>
        <Route
          path={process.env.PUBLIC_URL + "/home"}
          element={<HomePage></HomePage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
