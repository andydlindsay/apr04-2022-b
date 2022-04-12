setTimeout(() => {
  console.log('when do I fire?');
  console.log('when do I fire?');
  console.log('when do I fire?');
  console.log('when do I fire?');
}, 5);

for (let i = 0; i < 10000; i++) {
  const date = new Date();
  console.log(date);
} // 2000ms


console.log('do I wait to print out?');
