const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

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



app.use(cors());

app.get('/', (req, res) => {
res.send('go to /stats')
});


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

app.listen(4000, () => {
    console.log('Products server listening on port 4000')
});