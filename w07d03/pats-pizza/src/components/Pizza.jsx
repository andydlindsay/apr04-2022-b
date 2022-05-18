import {useState} from 'react';

const Pizza = () => {
  const [topping, setTopping] = useState('');

  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('stuffed');

  const [pizza, setPizza] = useState({
    crustType: 'stuffed',
    toppings: []
  });

  const toppingsMap = pizza.toppings.map((topping, index) => {
    return <p key={index} id={index}>{topping}</p>
  });

  const updateCrust = (event) => {
    setPizza(prevPizza => {
      return {
        ...prevPizza,
        crustType: event.target.value
      };
    });
  };

  const addTopping = () => {
    setPizza(prevPizza => {
      return {
        ...prevPizza,
        toppings: [
          ...prevPizza.toppings,
          topping
        ]
      };
    });

    // setToppings(prevToppings => {
    //   return [
    //     ...prevToppings,
    //     topping
    //   ];
    // });
  };

  return (
    <div>
      <h2>Create your own Pizza!</h2>

      <div>
        <h3>Current crust: {pizza.crustType}</h3>
        <label>New crust type:</label>
        <input 
          value={pizza.crustType}
          onChange={updateCrust}
        />
      </div>

      <div>
        <label>New topping:</label>
        <input 
          value={topping}
          onChange={(event) => setTopping(event.target.value)}
        />
        <button onClick={addTopping}>Add!</button>
      </div>

      <h3>Current toppings:</h3>
      { toppingsMap }
    </div>
  );
};

export default Pizza;
