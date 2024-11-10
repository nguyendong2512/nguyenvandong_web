const Todo = require('../Model/todomodel');

exports.getTodos = (req, res) => {
    Todo.getAll((err, todos) => {
        if (err) return res.status(500).send('Database error');
        res.json(todos);
    });
};

exports.addTodo = (req, res) => {
    const { title, due_date } = req.body;
    Todo.add(title, due_date, (err) => {
        if (err) return res.status(500).send('Failed to add task');
        res.send('Task added');
    });
};

exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, due_date } = req.body;
    Todo.update(id, title, due_date, (err) => {
        if (err) return res.status(500).send('Failed to update task');
        res.send('Task updated');
    });
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    Todo.delete(id, (err) => {
        if (err) return res.status(500).send('Failed to delete task');
        res.send('Task deleted');
    });
};

exports.toggleComplete = (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    Todo.toggleComplete(id, completed, (err) => {
        if (err) return res.status(500).send('Failed to update status');
        res.send('Status updated');
    });
};
