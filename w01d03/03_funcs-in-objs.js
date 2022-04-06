let user = {
  name: 'Bob',
  sayMyName: function() {
    // `this` refers to the object itself `self`
    // console.log('function inside object', user.name);
    globalCount++;
    console.log('function inside object', this.name);
  }
};

let globalCount = 0;
console.log('before', globalCount); // 0

console.log('this', this);

const myCopy = user;
user = null;

console.log(user);
console.log(myCopy);

const myFuncName = 'log';
console[myFuncName]('does this work?')

myCopy.sayMyName();
console.log('after', globalCount); // 1
