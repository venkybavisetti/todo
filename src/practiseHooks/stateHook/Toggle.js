import React, { useState } from 'react';

const Toggle = (props) => {
  const [state, toggleState] = useState(false);
  return (
    <div>
      <span>{state ? 'Turn off' : 'Turn on'}</span>
      <button onClick={() => toggleState((lastState) => !lastState)}>
        Click here
      </button>
    </div>
  );
};

export default Toggle;
