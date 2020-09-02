import React from 'react';

const TodoTask = ({ task, updateTask, deleteTask }) => {
  return (
    <div className={`displayTodoTask ${task.status}`}>
      <span className="statusBox"></span>
      <span onClick={() => updateTask(task.id)} className="text">
        {task.text}
      </span>
      <div className="deleteBtn" onClick={() => deleteTask(task.id)}>
        X
      </div>
    </div>
  );
};

export default TodoTask;
