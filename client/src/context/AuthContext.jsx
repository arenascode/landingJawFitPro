import { createContext, useContext, useEffect, useState } from "react";
import { makeRequest } from "../axios.js";
import propTypes from "prop-types";

export const AuthContext = createContext()

//* Hook
export const useSessions = () => {
  return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
  
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('jawFitUser')) || null)

  const adminLogin = async (inputs) => {
    const res = await makeRequest.post('/sessions/login', inputs)
    setCurrentUser(res.data)
  }

  useEffect(() => {
    localStorage.setItem('jawFitUser', JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{currentUser, adminLogin, setCurrentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};