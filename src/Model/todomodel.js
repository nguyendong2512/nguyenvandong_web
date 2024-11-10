const db = require('../configs/db');

const Todo = {
    getAll: (callback) => {
        db.query('SELECT * FROM todos', callback);
    },
    add: (title, due_date, callback) => {
        db.query('INSERT INTO todos (title, due_date, completed) VALUES (?, ?, false)', [title, due_date], callback);
    },
    update: (id, title, due_date, callback) => {
        db.query('UPDATE todos SET title = ?, due_date = ? WHERE id = ?', [title, due_date, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM todos WHERE id = ?', [id], callback);
    },
    toggleComplete: (id, completed, callback) => {
        db.query('UPDATE todos SET completed = ? WHERE id = ?', [completed, id], callback);
    },
};

module.exports = Todo;
