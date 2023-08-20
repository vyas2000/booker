import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './pages/books/Books'
import Book from './pages/book/Book'
import Login from './pages/Login/Login'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import Main from './layout/Main'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Main>
        <Routes>
          <Route element={<Books />} path='/books' />
          <Route element={<Login />} path='/login' />
          <Route element={<Book />} path='/book' />
        </Routes>
      </Main>
      <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
