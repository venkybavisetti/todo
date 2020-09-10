import React, { useState, useEffect } from 'react';
import InputBox from './InputBox';
import TaskList from './TaskList';
import Header from './Header';
import '../todo.css';
import todoApi from './todoApi';

const Todo = function (props) {
  const [todoList, setTodoList] = useState([]);
  const [header, setHeader] = useState('');

  const updateTodo = ({ todoList, header }) => {
    setTodoList(todoList);
    setHeader(header);
  };

  useEffect(() => {
    todoApi.getTodo().then(updateTodo);
  }, []);

  const deleteTasks = function () {
    todoApi.deleteTasks().then(updateTodo);
  };

  const updateHeader = function (header) {
    todoApi.updateHeader(header).then(updateTodo);
  };

  const updateTask = function (taskId) {
    todoApi.updateTask(taskId).then(updateTodo);
  };

  const createTask = function (text) {
    todoApi.createTask(text).then(updateTodo);
  };

  const deleteTask = function (taskId) {
    todoApi.deleteTask(taskId).then(updateTodo);
  };

  return (
    <div className="todoBox">
      <Header header={header} onEnter={updateHeader} deleteTask={deleteTasks} />

      <TaskList
        tasks={todoList}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />

      <InputBox onEnter={createTask} />
    </div>
  );
};

export default Todo;
