import React from 'react';

const TodoItem = ({ item, onClick, itemPlace }) => {
  const colorBox = item.isDone ? 'doneColor colorBox' : 'notDoneColor colorBox';
  const content = item.isDone ? 'lineThrough content' : 'content';

  return (
    <div className="displayTodoItem">
      <span className={colorBox}></span>
      <span onClick={() => onClick(itemPlace)} className={content}>
        {item.content}
      </span>
    </div>
  );
};

export default TodoItem;
