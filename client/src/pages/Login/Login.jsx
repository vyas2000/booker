import React from "react";

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="bg-design">
          <div className="div-1">Log</div>
          <div className="div-2">In</div>
        </div>
        <h2>Login</h2>
        <div className="login-input-container">
          <input
            type="text"
            placeholder="Enter your Username"
            className="text-input"
          />
          <input
            type="text"
            placeholder="Enter your Password"
            className="text-input"
          />
        </div>
        <button type="submit" className="btn-primary mb-7 w100-p">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
