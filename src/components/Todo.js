import React, { useState } from 'react';
import InputBox from './InputBox';
import TodoTask from './TodoTask';
import Header from './Header';
import { getNextStatus, getDefaultStatus } from '../statuses';
import '../todo.css';

const generateId = function () {
  return Math.floor(Math.random() * Date.now());
};

const cloneStructure = function (structure) {
  //JSON.parse(JSON.stringify(structure));
  return structure.map((task) => ({ ...task }));
};

const Todo = function (props) {
  const [todoList, setTodoList] = useState([]);
  const [header, setTitle] = useState('Todo List');

  const createTask = (text) => {
    setTodoList((list) => [
      ...list,
      { id: generateId(), text, status: getDefaultStatus() },
    ]);
  };

  const updateTask = (taskId) => {
    setTodoList((list) => {
      const newList = cloneStructure(list);
      const task = newList.find((task) => task.id === taskId);
      task.status = getNextStatus(task.status);
      return newList;
    });
  };

  const updateHeader = (header) => {
    setTitle(header);
  };

  const deleteTask = (taskId) => {
    setTodoList((list) => {
      const newList = cloneStructure(list);
      const taskIndex = newList.findIndex((task) => task.id === taskId);
      newList.splice(taskIndex, 1);
      return newList;
    });
  };

  const deleteTasks = () => {
    setTodoList([]);
  };

  const children = todoList.map((task) => (
    <TodoTask
      task={task}
      key={task.id}
      updateTask={updateTask}
      deleteTask={deleteTask}
    />
  ));

  return (
    <div className="todoBox">
      <Header header={header} onEnter={updateHeader} deleteTask={deleteTasks} />

      {children}

      <InputBox onEnter={createTask} />
    </div>
  );
};

export default Todo;
