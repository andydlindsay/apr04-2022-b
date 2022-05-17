import {useState} from 'react';
import Button from './Button';

// let count = 0;

const Counter = () => {
  // const stateArr = useState(0);
  // const count = stateArr[0];
  // const setCount = stateArr[1];

  const [count, setCount] = useState(0);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  
  const increment = () => {
    // Please don't ever mutate state directly
    // count += 1;

    if (count < 10) {
      setCount(count + 1);
    }

    console.log(count);
  };

  return (
    <div>
      <h2>The Counter component</h2>

      <h2>Current count: {count}</h2>
      {/* <button onClick={increment}>Click me!!!</button> */}

      <Button 
        // count={count} 
        // setCount={setCount} 
        onClick={increment}
      />
    </div>
  );
};

export default Counter;
