import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.inputText || '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleKeyPress(event) {
    const content = event.target.value;
    if (event.keyCode === 13 && content !== '') {
      this.props.onEnter(event.target.value);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <input
        className="inputTag"
        value={this.state.text}
        onKeyDown={this.handleKeyPress}
        onChange={this.handleChange}
      />
    );
  }
}

export default InputBox;
