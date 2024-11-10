import React from 'react';

const TodoItem = ({ todo, setTodos }) => {
    const toggleComplete = () => {
        fetch(`/todos/${todo.id}/completed`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed: !todo.completed }),
        }).then(() => setTodos(prev => prev.map(t => (t.id === todo.id ? { ...t, completed: !t.completed } : t))));
    };

    return (
        <div>
            <input type="radio" checked={todo.completed} onChange={toggleComplete} />
            {todo.title}
        </div>
    );
};

export default TodoItem;
