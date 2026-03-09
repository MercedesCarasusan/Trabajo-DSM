import HomePage from "../movies/pages/HomePage"
import Login from "../auth/Login"
import Register from "../auth/Register"

import ContactPage from "../pages/ContactPage"
import LegalPage from "../pages/LegalPage"

import { Route, Routes } from "react-router"

const AppRouter = () => {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="/legal" element={<LegalPage />} />

    </Routes>

  )
}

export default AppRouter