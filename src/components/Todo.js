import React from 'react';
import InputBox from './inputBox';
import TodoTask from './todoTask';
import Header from './header';
import './todo.css';

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
    this.state = { list: [] };

    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  createTask(text) {
    this.setState(({ list }) => {
      const newList = cloneStructure(list);
      newList.push({ id: generateId(), text, status: 0 });
      return { list: newList };
    });
  }

  updateTask(taskId) {
    this.setState(({ list }) => {
      const newList = cloneStructure(list);
      const task = newList.find((task) => task.id === taskId);
      task.status = (task.status + 1) % 3;
      return { list: newList };
    });
  }

  render() {
    const children = this.state.list.map((task) => (
      <TodoTask task={task} key={task.id} onClick={this.updateTask} />
    ));

    return (
      <div className="todo">
        <Header />
        {children}
        <InputBox onEnter={this.createTask} />
      </div>
    );
  }
}

export default Todo;
