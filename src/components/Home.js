import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const Home = ({ auth }) => {
  return (
    <div>
      <p>
        {!auth
          ? "Your are not authenticated,Please login first"
          : "Logged in, Now you can enter Playground"}
      </p>
      <ul>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
