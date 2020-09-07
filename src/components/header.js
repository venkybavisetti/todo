import React, { useState } from 'react';
import InputBox from './InputBox';
import AddDeleteBtn from './DeleteButton';

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
    </div>
  );
};

export default AddDeleteBtn(Header);
