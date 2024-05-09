const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.get("/", (req, res) => {
    res.send("hello from node api")
})

app.get("/blog", (req, res) => {
  res.send("hello blog, my name is bug");
});

app.listen(3000, ()=> console.log('server started on port 3000'))