const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/subscribers");
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open',()=>console.log('connected to database'))

app.listen(3000, ()=> console.log('server started'))