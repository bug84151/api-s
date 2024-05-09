const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello from node api")
})

app.get("/blog", (req, res) => {
  res.send("hello blog, my name is bug");
});

app.post("/product", (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

mongoose.
    connect(
  "mongodb+srv://admin:admin@bugsapi.hwxkn37.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=bugsApi"
).then(() => {
    console.log("connected to mongodb");
    app.listen(3000, () => console.log("server started on port 3000"));
}).catch((err) => {
    console.log(err);
})