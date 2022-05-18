import {useState} from 'react';

const VisitorCounter = () => {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // setCounter((prev) => {});

    setCounter((latestValueForState) => {
      // return value becomes the new state
      return latestValueForState + 1;
    });
    setCounter((latestValueForState) => {
      // return value becomes the new state
      return latestValueForState + 1;
    });
    setCounter((latestValueForState) => {
      // return value becomes the new state
      return latestValueForState + 1;
    });
  };

  return (
    <div>
      <h3>Visitor counter: {counter}</h3>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
};

export default VisitorCounter;
