import React, { useEffect, useState } from 'react';
import { authList } from '../hooks/Controller';
import '../style/Task.css';

function Task() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { fetchTask } = authList();

    const role = (localStorage.getItem("role") || "").toLowerCase();

    useEffect(() => {
        fetchTask(setTasks, setLoading);
    }, []);

    if (loading) return <p className="loading-text">Loading...</p>;

    return (
        <div className="task-container">
            <h1 className="page-title">
                {role === "admin" ? "All Task Details" : "My Tasks"}
            </h1>

            {tasks.length === 0 ? (
                <p className="no-task-text">No Tasks Found</p>
            ) : (
                <div className="task-list">
                    {tasks.map((task) => (
                        <div className="task-card" key={task._id}>
                            <h3 className="task-title">{task.title}</h3>
                            <p className="task-desc">{task.description}</p>

                            {role === "admin" && (
                                <p className="task-assigned">
                                    <strong>Assigned To:</strong> {task.userEmail}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Task;
