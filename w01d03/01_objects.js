// object = collection of key/value pairs
// data structure = collection of values (arrays, objects)
// console.log(username);

const studentOneUsername = 'Alice';
const studentOneCohort = 'Apr 04 2022';
const studentOneNumAssignments = 42;

const studentOne = ['Alice', 'Apr 04 2022', 42];
const username = studentOne[0]

const studentTwoUsername = 'Bob';

const studentOneObj = {
  "cohort": "Apr 04 2022",
  anotherValue: 5,
  myArr: [],
  myObj: {}
};

const key = 'username';

studentOneObj['username'] = 'Alice';
studentOneObj.username = 'Alice';

studentOneObj[key] = 'Bob';
studentOneObj.key = 'Bob';

// if you know the name of the key, use dot notation
// if the key name is dynamic, use square bracket notation

console.log(studentOneObj);

// let myNum = 5;
// myNum = 7;
// myNum

console.log(studentOneObj);
