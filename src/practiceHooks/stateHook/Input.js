import React, { useState } from 'react';

const InputBox = (props) => {
  const [text, setText] = useState(props.inputText || '');

  return (
    <input
      value={text}
      onChange={(event) => {
        const value = event.target.value;
        setText(value);
        props.onChange(value);
      }}
    />
  );
};

export default InputBox;
