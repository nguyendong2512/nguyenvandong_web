const express = require('express');
const mysql = require('mysql2'); 
const app = express();
const port = 3000;


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo_app' 
});


connection.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối: ' + err.stack);
        return;
    }
    console.log('Đã kết nối với MySQL với ID: ' + connection.threadId);
});

const todoRouter = require('./src/routers/todos'); 
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.use('/todos', todoRouter); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = connection;
