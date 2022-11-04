import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const CORRECT_PASSWORD = "fiyin";

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function login(profile_picture, first_name, last_name, username, password) {
    if (password === CORRECT_PASSWORD) {
      setError(null);
      setUser({
        profile_picture,
        first_name,
        last_name,
        username,
      });

      navigate("/");
    } else {
      setError("Password is not correct!");
    }
  }

  function logout() {
    setUser(null);
    navigate("/login");
  }

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, error, setError }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;