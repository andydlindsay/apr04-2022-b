// setTimeout allows us to have a function run after a specified delay

// setTimeout(() => {}, 1000);
// setTimeout();

console.log('3. top of the file');

const handle = setTimeout(() => {
  console.log('1. hello from the second timeout');
}, 3000);
clearTimeout(handle);

setTimeout(() => {
  console.log('2. hello from inside the timeout');
}, 2000);

console.log('4. bottom of the file');
