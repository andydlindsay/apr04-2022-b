// let myNum = 5;

// const addTwo = function(num) { // primitives are passed by value (copy)
//   // num = num + 2;
//   num += 2;
//   console.log(num); // 7?
// };

// addTwo(myNum);

// console.log(myNum); // 5

const user = {
  name: 'Alice'
};

const changeMyName = function (obj) { // objects are passed by reference (original)
  obj.name = 'Bob';
  console.log(obj); // 'Bob'
};

changeMyName(user);

console.log(user); // 'Bob' 'Alice'
