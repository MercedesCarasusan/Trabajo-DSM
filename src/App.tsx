import './App.css'
import Footer from './movies/components/ui/Footer'
import Header from './movies/components/ui/Header'
import AppRouter from './router/AppRouter'

function App() {

  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  )
}

export default App
