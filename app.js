const http = require("http");
const express = require("express");
const app = express();
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded())

app.use('/add-product',(req,res,next)=>{
  res.send(`<form action="/product" method="post"> <input name="product" type="text">
  <input name="size" type="number"><button type="submit">Add Product</button></form>`)
})

app.use('/product',(req,res,next)=>{
  console.log(req.body)
  res.redirect('/')
})

app.use('/',(req,res,next)=>{
  res.send('<h2>Hello From EXpress</h2>')
})
// app.use((request, response, next) => {
//   console.log("First Middleware");
//   next();
// });
// app.use((request, response, next) => {
//   console.log("Second Middleware");
// });
const server = http.createServer(app);
app.listen(3300);
