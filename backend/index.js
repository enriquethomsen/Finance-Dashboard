const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()

const PORT = process.env.PORT || PORT

const corsConfig = {
  origin: "*",
  credential: true,
  methods: ["GET","POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
//middlewares
app.use(express.json())

app.use(cors(corsConfig));


app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

//routes
readdirSync('./routes').map((route) => app.use('/api/v1/', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()
