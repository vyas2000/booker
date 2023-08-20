import bodyParser from "body-parser";
import express from "express";
import mysql from 'mysql2'
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'test'
})

// parse application/json
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
  res.json('lol my nigga')
})

app.get('/books', (req, res) => {
  const query = 'SELECT * FROM books'

  db.query(query, (error, data) => {
    if (error) {
      return res.status(400).json({ status: 400, error })
    } else {
      return res.status(200).json({ status: 200, data })
    }
  })
})

app.post('/books', (req, res) => {
  const query = 'INSERT INTO books (`title`, `desc`, `image`) VALUES (?)'
  console.log(req)
  const values = [req.body?.title, req.body?.desc, req.body?.image]

  db.query(query, [values], (error, data) => {
    if (error) {
      return res.status(400).json({ status: 400, error })
    } else {
      return res.status(200).json({ status: 200, message: "New Book Created." })
    }
  })
})

app.listen(8888, () => {
  console.log('connected to api at PORT 8888')
})