const express = require('express')
const mongoose = require('mongoose')
const Product = require("./models/productModel")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello from node api")
})

app.get("/blog", (req, res) => {
  res.send("hello blog, my name is bug");
});

app.post("/product", async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.get("/products", async (req, res) => {
  try {
    const product = await Product.find({})
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose.
    connect(
  "mongodb+srv://admin:admin@bugsapi.hwxkn37.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=bugsApi"
).then(() => {
    console.log("connected to mongodb");
    app.listen(3000, () => console.log("server started on port 3000"));
}).catch((err) => {
    console.log(err);
})