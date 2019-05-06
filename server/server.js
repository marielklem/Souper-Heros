const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/products', { useNewUrlParser: true })

const app =  express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const productRoutes = require('./routes/products')
const userRoutes = require('./routes/users')

app.use('/products', productRoutes)
app.use('/profile', userRoutes)

app.listen(8000)