// setInterval is to call our provided callback after a delay over and over

// setInterval(() => {}, 2000);

let timer = 3;

// const interval = setInterval(() => {
setInterval(function(){
  // console.log('hello world');
  timer--;
  console.log(timer);

  const clearMyInterval = () => {
    clearInterval(this);
  }

  clearMyInterval();
  // if (timer === 0) {
  //   clearInterval(this);
  // }
}, 1000);


// console.log(interval);
// clearInterval();

console.log()
