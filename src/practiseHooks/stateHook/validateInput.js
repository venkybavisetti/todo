import React from 'react';

const withValidation = (Component, isValid) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleValidation = this.handleValidation.bind(this);
    }

    handleValidation(text) {
      if (isValid(text)) {
        this.props.onChange(text);
      }
    }
    render() {
      return <Component onChange={this.handleValidation} />;
    }
  };
};

export default withValidation;
