const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://msmatos555:Marcelo@3@cluster0-dmfvg.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
app.use(express.json())
app.use(routes)
app.listen(3333)


//HTTP Methods: GET, PUT, PUT, DELETE

//Type of parameters

//Query params: Visible on URL - req.query (filter, sort, paging)
//Route params: Use with PUT and DELETE

//MongoDB



