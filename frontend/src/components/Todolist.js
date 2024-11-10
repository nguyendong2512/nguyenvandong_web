import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './Todoform';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('/todos')
            .then(response => response.json())
            .then(data => setTodos(data));
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm setTodos={setTodos} />
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
            ))}
        </div>
    );
};

export default TodoList;
