import React from 'react';

const TodoTask = ({ task, onClick, taskPlace }) => {
  const colorBox = task.isDone ? 'doneColor colorBox' : 'notDoneColor colorBox';
  const content = task.isDone ? 'lineThrough content' : 'content';

  return (
    <div className="displayTodoTask">
      <span className={colorBox}></span>
      <span onClick={() => onClick(taskPlace)} className={content}>
        {task.content}
      </span>
    </div>
  );
};

export default TodoTask;
