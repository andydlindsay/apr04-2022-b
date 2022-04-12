const higherOrder = (cb) => {
  const user = {
    name: 'Alice'
  };

  console.log('1. before the setTimeout');

  setTimeout(() => {
    user.name = 'Bob';
    cb(user);
    // console.log('inside the timeout', user);
  }, 2000);

  console.log('2. after the setTimeout');

  // return user;
};

console.log('4. before the main call');

const returnVal = higherOrder((something) => {
  console.log('3. inside the callback');
  console.log('something', something);
});

console.log('returnVal', returnVal);
// setTimeout(() => {
//   console.log('returnVal in the future', returnVal);
// }, 3000);

console.log('5. after the main call');
