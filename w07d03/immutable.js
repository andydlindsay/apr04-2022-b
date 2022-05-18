const user = {
  username: 'Alice',
  age: 42,
  faveFoods: ['watermelon']
};

// const copy = user;

// const pizza = {
//   ...prevPizza,
//   toppings: [
//     ...prevPizza.toppings,
//     topping
//   ]
// };

const copy = {
  ...user,
  username: 'Bob',
  faveMovie: 'Star Wars',
  faveFoods: [
    ...user.faveFoods,
    'pizza'
  ]
};

// copy.faveFoods.push('pizza');

// copy.username = 'Bob';

console.log('original', user);
console.log('copy', copy);

// const numbers = [1, 2, 3, 4];

// // const myCopy = [ 1, 2, 3, 4 ];

// // const [...myCopy] = numbers;
// const myCopy = [
//   ...numbers,
//   5
// ];

// // myCopy.push(5);

// console.log('original', numbers);
// console.log('copy', myCopy);
