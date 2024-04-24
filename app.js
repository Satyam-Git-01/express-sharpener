const http = require("http");
const express = require("express");
const app = express();
const bodyParse = require('body-parser')

const adminRoute= require('./routes/admin')
const shopRoute= require('./routes/shop')

app.use(bodyParse.urlencoded())

app.use(adminRoute)
app.use(shopRoute)

const server = http.createServer(app);
app.listen(3300);
