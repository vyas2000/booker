import React, { useEffect, useState } from 'react'

const Books = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = async () => {
    try {
      const response = await fetch('http://localhost:8888/books', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await response.json()

      if (data.status == 200) {
        console.log(data)
        setBooks(data.data)
      }
      
    } catch (error) {
      console.log('error while getting books :', error)
    }
  }

  return (
    <>
      <div className='books-container'>

        {
          books?.length
            ? books?.map((item, index) => (
              <div className="book">
                <div className="book-image"></div>
                <div className="book-title">{item.title}</div>
                <div className="book-desc">{item.desc}</div>
              </div>
            ))
            : null
        }

      </div>
    </>
  )
}

export default Books