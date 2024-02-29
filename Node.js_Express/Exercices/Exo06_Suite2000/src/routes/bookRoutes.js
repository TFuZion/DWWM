const express = require('express')
const path = require('path')
// const fs = require('fs')
const booksData = path.resolve('data/books.json')

const router = express.Router()

router.get('/books', (req, res) => {
  res.sendFile(booksData)
})

router.get('/books/:id', (req, res) => {
  const bookId = Number(req.params.id)
  
  res.send(bookId)
})

// bookRouteur.get('/add-book', (req, res) => {

// })

// bookRouteur.get('/find-book/author/:author', (req, res) => {

// })

module.exports = router
