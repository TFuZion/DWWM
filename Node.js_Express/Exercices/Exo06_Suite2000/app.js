const express = require('express')

const app = express()
const PORT = 3000
const bookRouteur = require("./src/routes/bookRoutes.js")


app.use((rep, res, next) => {
  console.log('test !')
  next();
})

app.use((rep, res, next) => {
  console.log('middleware executé')
  next();
})

app.use(express.static('public'))
app.use('/', bookRouteur)

app.listen(PORT, () => {
  console.log('Seerver Open');
})