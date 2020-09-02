import React from 'react';
import InputBox from './InputBox';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onEdit: false };

    this.updateHeader = this.updateHeader.bind(this);
    this.editMode = this.editMode.bind(this);
  }

  updateHeader(text) {
    this.props.onEnter(text);
    this.setState({ onEdit: false });
  }

  editMode() {
    this.setState({ onEdit: true });
  }

  render() {
    if (this.state.onEdit)
      return (
        <div className="header">
          <InputBox onEnter={this.updateHeader} inputText={this.props.header} />
        </div>
      );
    return (
      <div onClick={this.editMode} className="header">
        {this.props.header}
      </div>
    );
  }
}

export default Header;
