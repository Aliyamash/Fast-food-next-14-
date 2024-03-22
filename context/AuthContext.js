"use client";

import { me } from "@/actions/auth";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() =>{
   const verificationUser = async ()  => {
    const data = await me()
    if(data?.error){
      setUser(null)
    }else{
      setUser(data.user)
      console.log(data.user);
    }
   }
   verificationUser();
  }, [])

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
