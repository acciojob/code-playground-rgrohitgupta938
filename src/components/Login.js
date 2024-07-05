import React, { useEffect } from "react";

const Login = ({ setAuth, auth }) => {
  const handleLogin = () => {
    setAuth(!auth);
  };

  useEffect(() => {}, [auth]);

  return (
    <div>
      <h4>Login</h4>
      <button onClick={handleLogin}>{auth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Login;
