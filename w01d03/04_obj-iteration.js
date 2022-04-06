

// for (let i = 0... c-style loop
// for..of
// forEach
// for..in

// for (let i = 0; i < names.length; i++) {}

// let i = 0;
// while (i < names.length) {

//   i++;
// }

// const names = ['Alice', 'Bob', 'Carol'];

// for (const name of names) {
//   // name = 'Dean';
//   console.log(`hello there ${name}`);
// }

// for (const index in names) {
//   console.log(names[index]);
// }

const user = {
  username: 'jstamos',
  password: '1234',
  age: 29
};

// for..in is the only way to directly iterate through an object
for (const key in user) {
  console.log(key, user[key]);
}

// get the keys from the object and put them in an array
const userObjKeys = Object.keys(user);
// console.log(userObjKeys);

// iterate through the array of keys
for (const key of userObjKeys) {
  console.log('key', key);
  console.log(user[key]);
}





