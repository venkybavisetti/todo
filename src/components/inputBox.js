import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyPress(event) {
    const content = event.target.value;
    if (event.keyCode === 13 && content !== '') {
      this.props.handleEnterPress(event.target.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <input
        className="inputTag"
        value={this.state.value}
        onKeyDown={this.handleKeyPress}
        onChange={this.handleChange}
      />
    );
  }
}

export default InputBox;
