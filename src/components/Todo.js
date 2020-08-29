import React from 'react';
import InputBox from './inputBox';
import TodoItem from './todoItem';
import './todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [{ content: 'hi hello', isDone: false }] };

    this.handleEnterPress = this.handleEnterPress.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleEnterPress(content) {
    this.setState(({ list }) => ({
      list: list.concat({ content, isDone: false }),
    }));
  }

  handleItemClick(itemPlace, status) {
    this.setState(({ list }) => {
      const newList = list.slice();
      newList[itemPlace].isDone = status;
      return { list: newList };
    });
  }

  render() {
    const children = this.state.list.map((item, itemPlace) => (
      <TodoItem
        item={item}
        key={itemPlace}
        onClick={this.handleItemClick}
        itemPlace={itemPlace}
      />
    ));

    return (
      <div className="todo">
        <h1>Todo List</h1>
        {children}
        <InputBox handleEnterPress={this.handleEnterPress} />
      </div>
    );
  }
}

export default Todo;
