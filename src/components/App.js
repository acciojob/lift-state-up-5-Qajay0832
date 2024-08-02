
import React, { useState } from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    setIsLoggedIn(true);
  };
  return (
    <div>
      {/* Do not remove the main div */}
      {isLoggedIn ? <p>You are logged in!</p> : <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />}
    </div>
  )
}

export default App
