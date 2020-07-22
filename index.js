
const http = require('http');
const cors = require('cors');
const mysql = require('mysql');
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server)


const SELECT_ALL_STATS_QUERY = 'SELECT * FROM pk_times_comp ORDER BY TOPSCORE DESC';

const connection = mysql.createConnection({
    host: 'sql3.freemysqlhosting.net',
    user: 'sql3355864',
    password: 'vGhZr4dUBg',
    database: 'sql3355864'
});

connection.connect(err => {

    if(err) {
        return err;
    }
});



io.on("connection", socket => {
    const { id } = socket.client;
    console.log(`User Connected: ${id}`);
    socket.on("chat message", ({ ColorHolder, nickname, msg }) => {
      io.emit("chat message", { id , ColorHolder, nickname, msg });
    });
  });
app.use(cors());


app.get('/stats', (req, res) => {
    connection.query(SELECT_ALL_STATS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});

app.get('/login', (req, res) => {
    connection.query(SELECT_ALL_STATS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));