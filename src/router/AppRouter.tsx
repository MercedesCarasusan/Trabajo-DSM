import HomePage from "../movies/pages/HomePage"
import Login from "../auth/Login"
import Register from "../auth/Register"

import ContactPage from "../pages/ContactPage"
import LegalPage from "../pages/LegalPage"

import MovieDetailPage from "../movies/pages/MovieDetailPage"
import FavoritesPage from "../movies/pages/FavoritesPage"

import { Route, Routes } from "react-router"
import ErrorPage from "../pages/ErrorPage"

const AppRouter = () => {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<Login />} />
      
      <Route path="/movie/:id" element={<MovieDetailPage />} />

      <Route path="/favorites" element={<FavoritesPage />} />

      <Route path="/register" element={<Register />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="/legal" element={<LegalPage />} />

      <Route path="*" element={<ErrorPage />} />

    </Routes>

  )
}

export default AppRouter