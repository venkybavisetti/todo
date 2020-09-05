import React, { useEffect, useState } from 'react';

const Timer = (props) => {
  const [secondsElapsed, updateSecondsElapsed] = useState(0);

  useEffect(() => {
    console.log(secondsElapsed);
    const interval = setInterval(() => {
      console.log('inside set Interval');
      updateSecondsElapsed((s) => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{secondsElapsed}</p>
    </div>
  );
};

const TimerWrapper = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      {clicked ? <></> : <Timer />}
      <button onClick={() => setClicked((c) => !c)}>kill timer</button>
    </div>
  );
};

export default TimerWrapper;
