import React from 'react';

const Login = ({ onLogin }) => {
  const handleClick = () => {
    onLogin();
  };

  return (
    <div>
      <h1>Please log in.</h1>
      <button onClick={handleClick}>Log In</button>
    </div>
  );
};

export default Login;
