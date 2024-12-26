// src/context/AuthProvider.jsx
import React, { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext();

// Create a custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component that wraps your app and provides the context
const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const login = (user) => setAuthUser(user);
  const logout = () => setAuthUser(null);

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
