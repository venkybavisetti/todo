import React from 'react';
import InputBox from './inputBox';
import TodoTask from './todoTask';
import './todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };

    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  createTask(content) {
    this.setState(({ list }) => ({
      list: list.concat({ content, isDone: false }),
    }));
  }

  updateTask(taskPlace) {
    this.setState(({ list }) => {
      const newList = list.map((task) => ({ ...task }));
      newList[taskPlace].isDone = !newList[taskPlace].isDone;
      return { list: newList };
    });
  }

  render() {
    const children = this.state.list.map((task, taskPlace) => (
      <TodoTask
        task={task}
        key={taskPlace}
        onClick={this.updateTask}
        taskPlace={taskPlace}
      />
    ));

    return (
      <div className="todo">
        <h1>Todo List</h1>
        {children}
        <InputBox createTask={this.createTask} />
      </div>
    );
  }
}

export default Todo;
