import React, { useState } from 'react';
import InputBox from './InputBox';

const Header = (props) => {
  const [isEditMode, setOnEditMode] = useState(false);

  const updateHeader = (text) => {
    props.onEnter(text);
    setOnEditMode(false);
  };

  if (isEditMode)
    return (
      <div className="header">
        <InputBox onEnter={updateHeader} inputText={props.header} />
      </div>
    );

  return (
    <div className="header">
      <span onClick={() => setOnEditMode(true)}>{props.header}</span>
      <div className="deleteBtn" onClick={props.deleteTasks}>
        X
      </div>
    </div>
  );
};

export default Header;
