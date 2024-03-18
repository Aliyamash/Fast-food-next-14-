"use client";

import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const LoginContext = (user) => {
    setUser(user);
    console.log(user);
  };
  return (
    <AuthContext.Provider value={{ user, LoginContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
