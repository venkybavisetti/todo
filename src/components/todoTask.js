import React from 'react';

const TodoTask = ({ task, onClick }) => {
  const taskColor = ['notDone', 'progress', 'done'];
  const taskDecoration = taskColor[task.status];

  return (
    <div className={`displayTodoTask ${taskDecoration}`}>
      <span className="statusBox"></span>
      <span onClick={() => onClick(task.id)} className="text">
        {task.text}
      </span>
    </div>
  );
};

export default TodoTask;
