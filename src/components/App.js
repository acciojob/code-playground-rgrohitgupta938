import React, { useState } from "react";
import "./../styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import First from "./First";
import PlayGround from "./PlayGround";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const [auth, setAuth] = useState(false);
  return (
    <div className="main-container">
      {/* Do not remove the main div */}
      <Home auth={auth} />
      <Routes>
        <Route path="/" element={<div>Page not Found</div>} />
        <Route
          path="/playground"
          element={
            <ProtectedRoute auth={auth}>
              <PlayGround />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={<Login setAuth={setAuth} auth={auth} />}
        />
        <Route path="*" element={<div>Page not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
