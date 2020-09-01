import React from 'react';
import InputBox from './inputBox';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { header: 'Todo List', onEdit: false };

    this.updateHeader = this.updateHeader.bind(this);
    this.editMode = this.editMode.bind(this);
  }

  updateHeader(text) {
    this.setState({ header: text, onEdit: false });
  }

  editMode() {
    this.setState({ onEdit: true });
  }

  render() {
    if (this.state.onEdit)
      return (
        <div className="header">
          <InputBox onEnter={this.updateHeader} inputText={this.state.header} />
        </div>
      );
    return (
      <div onClick={this.editMode} className="header">
        {this.state.header}
      </div>
    );
  }
}

export default Header;
