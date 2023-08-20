import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './pages/books/Books'
import Book from './pages/book/Book'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Books />} path='/books' />
          <Route element={<Book />} path='/book' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
