import React from 'react';

const TodoTask = ({ task, onClick }) => {
  const taskColor = [
    { textDecoration: 'text', statusBox: 'notDoneColor statusBox' },
    { textDecoration: 'text', statusBox: 'doingColor statusBox' },
    { textDecoration: 'text lineThrough', statusBox: 'doneColor statusBox' },
  ];

  const { textDecoration, statusBox } = taskColor[task.status];

  return (
    <div className="displayTodoTask">
      <span className={statusBox}></span>
      <span onClick={() => onClick(task.id)} className={textDecoration}>
        {task.text}
      </span>
    </div>
  );
};

export default TodoTask;
