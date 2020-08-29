import React from 'react';
import InputBox from './inputBox';
import TodoItem from './todoItem';
import './todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };

    this.createItem = this.createItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  createItem(content) {
    this.setState(({ list }) => ({
      list: list.concat({ content, isDone: false }),
    }));
  }

  updateItem(itemPlace) {
    this.setState(({ list }) => {
      const newList = list.map((item) => ({ ...item }));
      newList[itemPlace].isDone = !newList[itemPlace].isDone;
      return { list: newList };
    });
  }

  render() {
    const children = this.state.list.map((item, itemPlace) => (
      <TodoItem
        item={item}
        key={itemPlace}
        onClick={this.updateItem}
        itemPlace={itemPlace}
      />
    ));

    return (
      <div className="todo">
        <h1>Todo List</h1>
        {children}
        <InputBox createItem={this.createItem} />
      </div>
    );
  }
}

export default Todo;
