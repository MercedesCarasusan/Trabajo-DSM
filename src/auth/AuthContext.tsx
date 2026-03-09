// Guarda globalmente login, token, user id y las funciones de login/logout
import React, { createContext, useState, useEffect } from "react"

interface AuthContextType {
  isLogged: boolean
  token: string
  userId: string
  login: (token: string, userId: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  isLogged: false,
  token: "",
  userId: "",
  login: () => {},
  logout: () => {},
})

interface Props {
  children: React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {

  const [token, setToken] = useState<string>("")
  const [userId, setUserId] = useState<string>("")

  const isLogged = !!token

  useEffect(() => {

    const storedToken = localStorage.getItem("token")
    const storedUserId = localStorage.getItem("userId")

    if (storedToken && storedUserId) {
      setToken(storedToken)
      setUserId(storedUserId)
    }

  }, [])

  const loginHandler = (token: string, userId: string) => {

    setToken(token)
    setUserId(userId)

    localStorage.setItem("token", token)
    localStorage.setItem("userId", userId)
  }

  const logoutHandler = () => {

    setToken("")
    setUserId("")

    localStorage.removeItem("token")
    localStorage.removeItem("userId")
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        token,
        userId,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}