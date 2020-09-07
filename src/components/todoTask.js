import React from 'react';
import AddDeleteBtn from './DeleteButton';

const TodoTask = ({ task, updateTask }) => {
  return (
    <div className={`displayTodoTask ${task.status}`}>
      <span className="statusBox"></span>
      <span onClick={() => updateTask(task.id)} className="text">
        {task.text}
      </span>
    </div>
  );
};

export default AddDeleteBtn(TodoTask);
