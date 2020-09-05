import React from 'react';
import Input from './Input';
import withValidation from './validateInput';

const ValidatedInput = withValidation(Input, (text) => text.length <= 5);

class Hoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.textChanged = this.textChanged.bind(this);
  }

  textChanged(newText) {
    this.setState({ text: newText });
  }

  render() {
    return (
      <div>
        <ValidatedInput onChange={this.textChanged} />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Hoc;
