import React from 'react';
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

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], header: 'Todo List' };

    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.updateHeader = this.updateHeader.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  createTask(text) {
    this.setState(({ list }) => {
      const newList = cloneStructure(list);
      newList.push({ id: generateId(), text, status: getDefaultStatus() });
      return { list: newList };
    });
  }

  updateTask(taskId) {
    this.setState(({ list }) => {
      const newList = cloneStructure(list);
      const task = newList.find((task) => task.id === taskId);
      task.status = getNextStatus(task.status);
      return { list: newList };
    });
  }

  updateHeader(header) {
    this.setState({ header });
  }

  deleteTask(taskId) {
    this.setState(({ list }) => {
      const newList = cloneStructure(list);
      const taskIndex = newList.findIndex((task) => task.id === taskId);
      newList.splice(taskIndex, 1);
      return { list: newList };
    });
  }

  render() {
    const children = this.state.list.map((task) => (
      <TodoTask
        task={task}
        key={task.id}
        updateTask={this.updateTask}
        deleteTask={this.deleteTask}
      />
    ));

    return (
      <div className="todoBox">
        <Header header={this.state.header} onEnter={this.updateHeader} />
        {children}
        <InputBox onEnter={this.createTask} />
      </div>
    );
  }
}

export default Todo;
