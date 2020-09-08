import React, { useState } from 'react';
import InputBox from './InputBox';
import AddDeleteBtn from './DeleteButton';

const DisplayHeaderText = (props) => (
  <div className="header">
    <span onClick={props.editMode}>{props.header}</span>
  </div>
);

const HeaderWithDeleteBtn = AddDeleteBtn(DisplayHeaderText);

const Header = (props) => {
  const [isEditMode, setOnEditMode] = useState(false);

  const updateHeader = (text) => {
    props.onEnter(text);
    setOnEditMode(false);
  };

  const editMode = () => {
    setOnEditMode(true);
  };

  if (isEditMode)
    return (
      <div className="header">
        <InputBox onEnter={updateHeader} inputText={props.header} />
      </div>
    );

  return (
    <HeaderWithDeleteBtn
      header={props.header}
      editMode={editMode}
      deleteTask={props.deleteTask}
    />
  );
};

export default Header;
