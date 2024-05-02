const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()


//middlewares
app.use(express.json())
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

//routes
readdirSync('/routes').map((route) => app.use('/api/v1', require('/routes/' + route)))

const server = () => {
    db()
    app.listen(5000, () => {
        console.log('listening to port:', 5000)
    })
}

server()
