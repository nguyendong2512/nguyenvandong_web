// src/components/TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            alert('Please enter a title for the task.');
            return;
        }

    
        const newTask = {
            title,
            due_date: dueDate,
            completed: false
        };


        try {
            const response = await fetch('http://localhost:5000/api/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });

            if (response.ok) {
                const savedTask = await response.json();
                onAddTask(savedTask); 
                setTitle(''); 
                setDueDate('');
            } else {
                console.error('Failed to add task');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Task Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task title"
                    required
                />
            </div>
            <div>
                <label>Due Date:</label>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TodoForm;
