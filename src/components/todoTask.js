import React from 'react';

const TodoTask = ({ task, updateTask, deleteTask }) => {
  const taskColor = ['notDone', 'progress', 'done'];
  const taskDecoration = taskColor[task.status];

  return (
    <div className={`displayTodoTask ${taskDecoration}`}>
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
