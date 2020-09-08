import React from 'react';
import TodoTask from './TodoTask';

const TaskList = function (props) {
  const { tasks, updateTask, deleteTask } = props;
  const taskList = tasks.map((task) => {
    return (
      <TodoTask
        task={task}
        key={task.id}
        id={task.id}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    );
  });
  return <div>{taskList}</div>;
};

export default TaskList;
