// Guarda globalmente login, token, user id y las funciones de login/logout
import React, { createContext, useState, useEffect } from "react"

interface AuthContextType {
  isLogged: boolean
  email: string
  token: string
  userId: string
  login: (token: string, userId: string, email: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  isLogged: false,
  email: "",
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
  const [email, setEmail] = useState<string>("")

  const isLogged = !!token

  useEffect(() => {

    const storedToken = localStorage.getItem("token")
    const storedUserId = localStorage.getItem("userId")
    const storedEmail = localStorage.getItem("email")

    if (storedToken && storedUserId && storedEmail) {
      setToken(storedToken)
      setUserId(storedUserId)
      setEmail(storedEmail)
    }

  }, [])

  const loginHandler = (token: string, userId: string, email: string) => {

    setToken(token)
    setUserId(userId)
    setEmail(email)

    localStorage.setItem("token", token)
    localStorage.setItem("userId", userId)
    localStorage.setItem("email", email)
  }

  const logoutHandler = () => {

    setToken("")
    setUserId("")
    setEmail("")
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("email")
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        email,
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